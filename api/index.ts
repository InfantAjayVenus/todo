import dotenv from 'dotenv';
import express, { ErrorRequestHandler, Request, Response } from "express";
import cors from 'cors';
import { errorHandler } from './src/lib/middlewares/errorHandler';
import { logger } from './src/lib/middlewares/logger';
import { projectRouter } from './src/projects/routes';
import { authHandler } from './src/lib/middlewares/authMiddleware';

dotenv.config();

const app = express();

const port = process.env.PORT || 3010;

app.use(cors());
app.use(express.json());
app.use(authHandler);
app.use(logger);
app.use('/projects', projectRouter);

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('OK');
});

app.use(errorHandler);

export const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
}).on("error", (error: ErrorRequestHandler) => {
  console.error(error);
});
