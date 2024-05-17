import { Request, Response } from "express";
import TaskData from "../data/TodoData";
import { Task } from "../types/Todo";
import { ErrorType } from "../types/Errors";
import { randomUUID } from "crypto";

const todoData = new TaskData();

export function getTasks(req: Request, res: Response) {
    res.json(todoData.tasks);
}

export function addTask(req: Request, res: Response) {
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
}

export function getTaskById(req: Request, res: Response) {
    const taskId = req.params.id;
    try {
        const taskData = todoData.getTask(taskId);
        res.json(taskData);
    } catch (error) {
        console.error(error);
        res.status(404).send("Task Not Found");
    }
}

export function updateTask(req: Request, res: Response) {
    const updateId = req.params.id;
    const updatedTaskData: Partial<Task> = req.body;
    const updatedTask = todoData.updateTask(updateId, updatedTaskData);

    return res.status(200).json(updatedTask);
}

export function deleteTask(req: Request, res: Response) {
    const deleteId = req.params.id;
    todoData.removeTask(deleteId);

    res.status(204).send("OK");
}