import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../models/User";
import bcrypt from 'bcryptjs';
import authService from "../service/user-service"
import { config } from "../config/config";
import Cookies from "cookies";
import Loging from "../library/Loging";

const genetareAccesToken = (id: String) => {
    const payload = {
        id,
    }

    return jwt.sign(payload, config.jwt.secretAccessKey, {expiresIn: "24h"})
}
class authController {
    async registration(req: Request, res: Response, next: NextFunction) {
        try {
            const { userName, password } = req.body;
            
            const user = await User.findOne({ userName });
            if (user) {
                return res.status(400).json({ message: 'Пользователь с таким именем уже зарегестрирован' })
            }

            await authService.registration(userName, password);
            res.status(200).json('успешно');
        } catch (error) {
            res.status(400).json(error);
        }
    }

    async login(req: Request, res: Response, next: NextFunction) {
        try {
            const { userName, password } = req.body;
            const user = await User.findOne({ userName });
            if (!user) {
                return res.status(400).json({ message: 'Пользователь не зарегестрирован' })
            }

            const validPassword = bcrypt.compareSync(password, user.password);
            if (!validPassword) {
                res.status(400).json({ message: 'Не верный пароль' })
            }
            const token = genetareAccesToken(user._id);
            // const cookies = new Cookies(req, res);
            // Loging.info(cookies.get('token'));
            // cookies.set('token', token)

            // Loging.info(req.headers['cookie']);
            // res.writeHead(200, { 'Set-Cookie': `token=${token}` });
            // res.end();

            Loging.info(req.cookies);
            res.cookie("token", "12345ABCDE",  {httpOnly: true});
            res.status(200).json('token');
        } catch (error) {
            res.status(500).json('error');
        }
    }

    async logout(req: Request, res: Response, next: NextFunction) {
        try {
            const { userName, password } = req.body;
            const user = await User.findOne({ userName });
            if (user) {
                return res.status(400).json({ message: 'Пользователь с таким именем уже зарегестрирован' })
            }

            const salt = bcrypt.genSaltSync(10);
            const hashPassword = bcrypt.hashSync(password, salt);

            await authService.registration(userName, hashPassword);
            res.status(200).json('успешно');
        } catch (error) {
            res.status(400).json('error');
        }
    }
}


export default new authController();