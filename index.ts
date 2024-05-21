import dotenv from 'dotenv';
import express, { ErrorRequestHandler, Request, Response } from "express";
import { resolve } from 'path';
import { errorHandler } from './middlewares/errorHandler';
import { logger } from './middlewares/logger';
import { tasksRouter } from './routes/tasksRoutes';

dotenv.config();

const app = express();

const port = process.env.PORT || 3010;

app.use(express.static('static'));
app.use(logger);
app.use('/tasks', tasksRouter);

app.get('/', (req: Request, res: Response) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
}).on("error", (error: ErrorRequestHandler) => {
  console.error(error);
});
