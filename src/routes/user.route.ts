import { Router } from "express";

import { createUser, getUsers } from "../controllers/user.controller"

const route = Router();

route.post('/', createUser);
route.get('/', getUsers);

export default route;