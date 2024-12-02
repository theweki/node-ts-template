import { userModel } from "../models/user.model.js";

interface UserDTO {
  name: string;
  age: string;
}

class UserService {
  static getUsers = async () => userModel.find().lean();
  static createUser = async (user: UserDTO) => userModel.create(user);
}

export { UserService };
