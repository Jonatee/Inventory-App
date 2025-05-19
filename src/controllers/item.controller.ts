import { Request, Response } from "express";
import { ITemService } from "../services/item.service";

const _itemService = new ITemService();

export const createItem = async (req: Request, res: Response) => {
    try {
        const user = await _itemService.createItem(req.body);
        res.status(201).json(user);
    } catch (error)
    {
        res.status(500).json({ message: error });
    }
}
export const getItemByName = async (req: Request, res: Response) => {
    try {
        const user = await _itemService.getItem(req.params.name);
        res.status(201).json(user);
    } catch (error)
    {
        res.status(500).json({ message: error });
    }
}