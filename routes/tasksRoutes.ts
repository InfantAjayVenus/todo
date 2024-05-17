import express from 'express';
import { addTask, deleteTask, getTaskById, getTasks, updateTask } from '../controllers/tasksControllers';

export const tasksRouter = express.Router();
tasksRouter.use(express.json());


tasksRouter.get('/', getTasks);

tasksRouter.post('/', addTask)

tasksRouter.get('/:id', getTaskById);

tasksRouter.patch('/:id', updateTask)

tasksRouter.delete('/:id', deleteTask);
