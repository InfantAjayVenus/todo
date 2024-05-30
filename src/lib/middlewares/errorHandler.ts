import { NextFunction, Request, Response } from "express";
import { handleError } from "../ErrorHandling/primaryErrorHandler";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error("REQUEST_INFO:", {
        URL: req.url,
        METHOD: req.method,
        QUERY: req.query,
        PARAMETERS: req.params,
        BODY: req.body,
    });
    handleError(err, res);
    next(err);
}