import { HttpStatus } from "./HttpStatus.js";

class ApiResponse {
  public statusCode: HttpStatus;
  public message: string;
  public data: any;

  constructor(
    statusCode: HttpStatus = HttpStatus.OK,
    message: string = "Success",
    data: any = undefined
  ) {
    this.data = data;
    this.message = message;
    this.statusCode = statusCode;
  }
}

export { ApiResponse };
