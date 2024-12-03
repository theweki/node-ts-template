import { NextFunction, Request, Response } from "express";
import { ApiError, ErrorDetails } from "../api/ApiError.js";
import { HttpStatus } from "../api/HttpStatus.js";

const errorMiddleware = (
  err: ApiError,
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error({
    statusCode: err.statusCode,
    message: err.message,
    data: err.data,
    stack: err.stack,
  });

  const statusCode = err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR;

  res
    .status(statusCode)
    .json(new ErrorDetails(statusCode, err.message, err.data));

  next();
};

export { errorMiddleware };
