import { randomUUID } from "crypto";
import { Request, Response } from "express";
import { DEFAULT_PROJECT_ID } from "../../../contants/projectConstants";
import todoDb from '../data-access/TasksModel';
import { ErrorType } from "../../lib/types/Errors";
import { Task } from "../data-access/TaskType";


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
        projectId=DEFAULT_PROJECT_ID,
    }: Partial<Task> = req.body;
    if (!title || title.length === 0) {
        res.status(401);
        throw (new Error(ErrorType.TITLE_REQUIRED));
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
    try {
        const taskData = todoDb.getTask(taskId);
        res.json(taskData);
    } catch (error) {
        res.status(404);
        throw (new Error(ErrorType.NOT_FOUND))
    }
}

export function updateTask(req: Request, res: Response) {
    const updateId = req.params.id;
    const updatedTaskData: Partial<Task> = req.body;
    try {
        const updatedTask = todoDb.updateTask(updateId, updatedTaskData);
        return res.status(200).json(updatedTask);

        /* eslint-disable  @typescript-eslint/no-explicit-any */
    } catch (error: any) {
        if(error.message === ErrorType.NOT_FOUND) {
            res.status(404);
            throw(error);
        }

    }
}

export function deleteTask(req: Request, res: Response) {
    const deleteId = req.params.id;
    todoDb.removeTask(deleteId);

    res.status(204).send("OK");
}