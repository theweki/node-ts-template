import { NextFunction, Request, Response, RequestHandler } from "express";
import { UserService } from "../services/user.service.js";
import { HttpStatus } from "../root/api/HttpStatus.js";
import { ApiResponse } from "../root/api/ApiResponse.js";

export const getUsers: RequestHandler = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await UserService.getUsers();
    res
      .status(HttpStatus.OK)
      .json(new ApiResponse(HttpStatus.OK, "Users found", users));
  } catch (error) {
    next(error);
  }
};

export const createUser: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await UserService.createUser(req.body);
    res
      .status(HttpStatus.CREATED)
      .json(new ApiResponse(HttpStatus.CREATED, "Users created", user));
  } catch (error) {
    next(error);
  }
};
