import { Request, Response } from "express";
import { UserService } from '../services/user.service';


const _userService = new UserService();

export const createUser = async (req: Request, res: Response) => {
    try {
        const user = await _userService.createUser(req.body);
        res.status(201).json(user);
    } catch (error)
    {
        res.status(500).json({ message: error });
    }
}
export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await _userService.getAllUser();
        res.status(200).json(users);

    } catch(error) {
        res.status(500).json({ message: error });
        
    }
}