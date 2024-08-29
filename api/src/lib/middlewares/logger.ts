import { RequestHandler } from "express";

export const logger: RequestHandler = (req, _, next) => {
    console.log(`------------------------------------------------------------`);
    
    console.log("TIME:", new Date().toString());
    console.log("URL:", req.url);
    console.log("METHOD:", req.method);
    req.params && console.log("REQUEST_PARAMETERS:", req.params);
    req.query && console.log("REQUEST_PARAMETERS:", req.query);
    req.body && console.log("REQUEST_BODY:", req.body);
    next();
    console.log(`------------------------------------------------------------`);

}