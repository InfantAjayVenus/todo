import dotenv from 'dotenv';
import express, { ErrorRequestHandler, Request, Response } from "express";
import cors from 'cors';
import { errorHandler } from './src/lib/middlewares/errorHandler';
import { logger } from './src/lib/middlewares/logger';
import { tasksRouter } from './src/tasks/entry-points/tasksRoutes';

dotenv.config();

const app = express();

const port = process.env.PORT || 3010;

app.use(cors());
app.use(logger);
app.use('/tasks', tasksRouter);

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('OK');
});

app.use(errorHandler);

export const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
}).on("error", (error: ErrorRequestHandler) => {
  console.error(error);
});
