import express, { ErrorRequestHandler, Request, Response } from "express";
import dotenv from 'dotenv';
import { resolve } from 'path';
import TaskData from "./data/TodoData";
import { Task } from "./types/Todo";
import { randomUUID } from "crypto";
import { ErrorType } from "./types/Errors";

dotenv.config();

const app = express();
app.use(express.json());

const port = process.env.PORT || 3010;
const todoData = new TaskData();

app.use(express.static('static'));

app.get('/', (req: Request, res: Response) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.get('/tasks', (req: Request, res: Response) => {
  res.json(todoData.tasks);
});

app.post('/tasks', (req, res) => {
  const {
    title,
    description,
    dueDate,
    isComplete,
    isFavourite,
    id
  }: Partial<Task> = req.body;
  if(!title || title.length === 0) {
    throw(ErrorType.TITLE_REQUIRED);
  }
  
  const newTask: Task = {
    title,
    description: description || '',
    isComplete: isComplete || false,
    isFavourite: isFavourite || false,
    id: id || randomUUID(),
    dueDate,

  }

  todoData.addTask(newTask)

  res.status(200).json(newTask);
})

app.get('/tasks/:id', (req: Request, res: Response) => {
  const taskId = req.params.id;
  try {
    const taskData = todoData.getTask(taskId);
    res.json(taskData);
  } catch (error) {
    console.error(error);
    res.status(404).send("Task Not Found");
  }
});

app.patch('/tasks/:id', (req: Request, res: Response) => {
  const updateId = req.params.id;
  const updatedTaskData: Partial<Task> = req.body;
  const updatedTask = todoData.updateTask(updateId, updatedTaskData);

  return res.status(200).json(updatedTask);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
}).on("error", (error: ErrorRequestHandler) => {
  console.error(error);
});
