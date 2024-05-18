import express from 'express';
import { createTask, deleteTask, getTaskById, getAllTasks, updateTask } from '../controllers/tasksControllers';

export const tasksRouter = express.Router();
tasksRouter.use(express.json());


tasksRouter.get('/', getAllTasks);

tasksRouter.post('/', createTask)

tasksRouter.get('/:id', getTaskById);

tasksRouter.patch('/:id', updateTask)

tasksRouter.delete('/:id', deleteTask);
