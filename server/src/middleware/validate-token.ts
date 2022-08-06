import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { config } from "../config/config";
import Loging from "../library/Loging";

export default async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(403).json({ message: 'Авторезируйтесь пожалуйтса'})
        }
        jwt.verify(token, config.jwt.secretAccessKey);
        next();
    } catch (error) {
        return res.status(403).json({ message: 'Не верный токен'})
    }
}