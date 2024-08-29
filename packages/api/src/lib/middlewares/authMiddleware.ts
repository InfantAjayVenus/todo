import { Request, Response, NextFunction } from "express";


export interface AuthenticatedRequest extends Request {
    creatorId?: string,
}

export const authHandler = (req: AuthenticatedRequest, _: Response, next: NextFunction) => {
    /**
     * TODO:
     * - look for a Auth header
     * - fetch the AUTH token
     * - parse the JWT and validate
     * - throw if invalid
     * - set ID on `creatorId`
     */
    req.creatorId = "91823751";
    next();
}