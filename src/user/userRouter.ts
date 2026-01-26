import express from 'express';
import { createUser } from './userCOntroller';

const userRouter = express.Router();


userRouter.post("/register", createUser);



export default userRouter;