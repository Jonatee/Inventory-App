import { User } from "../models/user.model";
import { IUser } from "../interfaces/user.interface";

export class UserService {
  async createUser(data: IUser): Promise<User> {
    try {
      return new User(
        "tftvftfrff-ftff",
        "Jonathan",
        "Oluwole",
        "Oluwolejonatee@gmail.com",
        "Jonathan",
        new Date()
      );
    } catch (error) {
      throw new Error(`Failed to Create User: ${error}`);
    }
  }

  async getAllUser(): Promise<User[]> {
    try {
      return [
        new User(
          "tftvftfrff-ftff",
          "Jonathan",
          "Oluwole",
          "Oluwolejonatee@gmail.com",
          "Jonathan",
          new Date()
        ),
      ];
    } catch (error) {
      throw new Error(`Failed to retrieve users: ${error}`);
    }
  }
}
