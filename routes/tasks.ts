import express, { Request, Response } from 'express';
import { Task } from '../types/Todo';
import { ErrorType } from '../types/Errors';
import { randomUUID } from 'crypto';
import TaskData from '../data/TodoData';

export const tasksRouter = express.Router();
tasksRouter.use(express.json());

const todoData = new TaskData();

tasksRouter.get('/', (req: Request, res: Response) => {
  res.json(todoData.tasks);
});

tasksRouter.post('/', (req, res) => {
  const {
    title,
    description,
    dueDate,
    isComplete,
    isFavourite,
    id
  }: Partial<Task> = req.body;
  if (!title || title.length === 0) {
    return res.status(400).send(ErrorType.TITLE_REQUIRED)
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

  res.status(201).json(newTask);
})

tasksRouter.get('/:id', (req: Request, res: Response) => {
  const taskId = req.params.id;
  try {
    const taskData = todoData.getTask(taskId);
    res.json(taskData);
  } catch (error) {
    console.error(error);
    res.status(404).send("Task Not Found");
  }
});

tasksRouter.patch('/:id', (req: Request, res: Response) => {
  const updateId = req.params.id;
  const updatedTaskData: Partial<Task> = req.body;
  const updatedTask = todoData.updateTask(updateId, updatedTaskData);

  return res.status(200).json(updatedTask);
})

tasksRouter.delete('/:id', (req: Request, res: Response) => {
  const deleteId = req.params.id;
  todoData.removeTask(deleteId);

  res.status(204).send("OK");
})
