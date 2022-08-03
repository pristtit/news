import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import User from "../models/User";
import bcrypt from 'bcryptjs';
import authService from "../service/user-service"
import Loging from "../library/Loging";

class authController {
    async registration(req: Request, res: Response, next: NextFunction) {
        try {
            const { userName, password } = req.body;
            const isUser = await User.findOne({userName});
            if (isUser) {
                return res.status(400).json({message: 'Пользователь с таким именем уже зарегестрирован'})
            }
            const hashPassword = bcrypt.hashSync(password, 10);
            await authService.registration(userName, hashPassword);
            res.status(200).json('успешно');
        } catch (error) {
            res.status(400).json('error');
        }
    }
}


export default new authController();