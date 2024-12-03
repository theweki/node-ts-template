import { HttpStatus } from "./HttpStatus.js";

class ApiError extends Error {
  public statusCode: HttpStatus;
  public message: string;
  public data: any;

  constructor(
    statusCode: HttpStatus = HttpStatus.INTERNAL_SERVER_ERROR,
    message: string = "Something went wrong",
    data: any = undefined
  ) {
    super(message);
    this.data = data;
    this.message = message;
    this.statusCode = statusCode;
  }
}

class ErrorDetails {
  public statusCode: HttpStatus;
  public message: string;
  public timestamp: Date;
  public data: any;

  constructor(
    statusCode: HttpStatus = HttpStatus.INTERNAL_SERVER_ERROR,
    message: string = "Something went wrong",
    data: any = undefined,
    timestamp: Date = new Date(Date.now())
  ) {
    this.data = data;
    this.timestamp = timestamp;
    this.message = message;
    this.statusCode = statusCode;
  }
}

export { ApiError, ErrorDetails };
