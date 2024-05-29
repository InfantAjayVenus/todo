import { NextFunction, Request, Response } from "express";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error("ERROR:", err.message);
    console.error("REQUEST_INFO:", {
        URL: req.url,
        METHOD: req.method,
        QUERY: req.query,
        PARAMETERS: req.params,
        BODY: req.body,
    });
    res.status(res.statusCode || 500).json({
        error: err.message || "Internal Server Error",
    })
    next(err);
}