import {Response} from 'express';
import { server } from "../../..";
import { AppError } from "./AppError";

/*eslint-disable @typescript-eslint/no-explicit-any */
export function handleError(error: any, res?: Response) {
    if(error instanceof AppError) {
        console.warn(error);

        return res?.status(error.httpCode).json({
            error: error.message
        });
    }

    server.close();
    console.error(error);
    setTimeout(() => {
        console.error('Forced Restart!')
        process.exit(1);
    }, 0).unref()
}