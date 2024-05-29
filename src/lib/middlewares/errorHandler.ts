import { ErrorRequestHandler, Request, Response } from "express";

export function errorHandler(err: any, req: Request, res: Response, next: Function){
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
}