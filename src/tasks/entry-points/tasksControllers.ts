import { randomUUID } from "crypto";
import { Request, Response } from "express";
import { DefinedErrors } from "../../lib/constants/Errors";
import { Task } from "../data-access/TaskType";
import todoDb from '../data-access/TasksModel';
import { AppError } from "../../lib/ErrorHandling/AppError";


export function getAllTasks(req: Request, res: Response) {
    res.json(todoDb.tasks);
}

export function createTask(req: Request, res: Response) {
    const {
        title,
        description,
        dueDate,
        isComplete,
        isFavourite,
        id,
        projectId,
    }: Partial<Task> = req.body;
    if (!title || title.length === 0) {
        throw (new AppError(DefinedErrors.TITLE_REQUIRED, 400));
    }

    if (!projectId || projectId.length === 0) {
        throw (new AppError(DefinedErrors.PROJECT_REQUIRED, 400));
    }

    const newTask: Task = {
        title,
        description: description || '',
        isComplete: isComplete || false,
        isFavourite: isFavourite || false,
        id: id || randomUUID(),
        dueDate,
        projectId,
    }

    todoDb.addTask(newTask)

    res.status(201).json(newTask);
}

export function getTaskById(req: Request, res: Response) {
    const taskId = req.params.id;
    const taskData = todoDb.getTask(taskId);
    res.json(taskData);
}

export function updateTask(req: Request, res: Response) {
    const updateId = req.params.id;
    const updatedTaskData: Partial<Task> = req.body;
    const updatedTask = todoDb.updateTask(updateId, updatedTaskData);
    return res.status(200).json(updatedTask);
}

export function deleteTask(req: Request, res: Response) {
    const deleteId = req.params.id;
    todoDb.removeTask(deleteId);

    res.status(204).send("OK");
}