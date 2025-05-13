"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = exports.createUser = void 0;
const user_service_1 = require("../services/user.service");
const _userService = new user_service_1.UserService();
const createUser = async (req, res) => {
    try {
        const user = await _userService.createUser(req.body);
        res.status(201).json(user);
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
};
exports.createUser = createUser;
const getUsers = async (req, res) => {
    try {
        const users = await _userService.getAllUser();
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
};
exports.getUsers = getUsers;
