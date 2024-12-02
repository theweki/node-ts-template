import { userModel } from "../models/user.model.js";

class UserService {
  static async getUsers() {
    const users = await userModel.find().lean();
    return users;
  }

  static async createUser(data: any) {
    const user = await userModel.create(data);
    return user.toObject();
  }
}

export { UserService };
