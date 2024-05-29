import { Request, Response } from "express";

export function logger(req: Request, res: Response, next: Function) {
    console.log(`------------------------------------------------------------`);
    
    console.log("TIME:", new Date().toString());
    console.log("URL:", req.url);
    console.log("METHOD:", req.method);
    req.params && console.log("REQUEST_PARAMETERS:", req.params);
    req.body && console.log("REQUEST_BODY:", req.body);
    next();
    console.log(`------------------------------------------------------------`);

}