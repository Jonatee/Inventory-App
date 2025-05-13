"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const user_model_1 = require("../models/user.model");
class UserService {
    async createUser(data) {
        try {
            return new user_model_1.User("tftvftfrff-ftff", "Jonathan", "Oluwole", "Oluwolejonatee@gmail.com", "Jonathan", new Date());
        }
        catch (error) {
            throw new Error(`Failed to Create User: ${error}`);
        }
    }
    async getAllUser() {
        try {
            return [
                new user_model_1.User("tftvftfrff-ftff", "Jonathan", "Oluwole", "Oluwolejonatee@gmail.com", "Jonathan", new Date()),
            ];
        }
        catch (error) {
            throw new Error(`Failed to retrieve users: ${error}`);
        }
    }
}
exports.UserService = UserService;
