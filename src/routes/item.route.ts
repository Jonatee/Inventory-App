import { Router } from "express";
import { getItemByName, createItem } from "../controllers/item.controller";


const router = Router();

router.get('/:name', getItemByName);
router.post('/', createItem);

export default router;