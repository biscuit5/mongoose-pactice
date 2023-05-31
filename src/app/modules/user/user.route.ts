
import express from "express";
import { createUser,  getAdminsUsers, getUser, UserbyId } from "./user.controller";

const router = express.Router();

router.get('/',getUser);
router.get('/admin',getAdminsUsers)
router.get('/:id',UserbyId);
router.post('/create-user',createUser)

export default router;