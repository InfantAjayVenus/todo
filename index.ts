import express, { ErrorRequestHandler, Request, Response } from "express";
import dotenv from 'dotenv';
import {resolve} from 'path';

dotenv.config();

const app = express();
const port = process.env.PORT || 3010;

app.use(express.static('static'));

app.get('/', (req: Request, res: Response) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
}).on("error" , (error: ErrorRequestHandler) => {
  console.error(error);
});
