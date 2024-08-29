import { DefinedErrors } from "../constants/Errors";

export class AppError extends Error {
    constructor(readonly message: string = DefinedErrors.UNKNOWN_ERROR, readonly httpCode: number=500) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
        Error.captureStackTrace(this);
    }
}