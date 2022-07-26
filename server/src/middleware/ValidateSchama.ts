import Joi, { ObjectSchema } from "joi";
import { NextFunction, Response, Request } from "express";
import Loging from "../library/Loging";
import { IUser } from "../models/User";
import { INews } from "../models/News";

export const ValidateSchema = (schema: ObjectSchema) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await schema.validateAsync(req.body);

            next();
        } catch (error) {
            Loging.error(error);
            return res.status(422).json({ error });
        }
    }
}

export const Schemas = {
    user: Joi.object<IUser>({
        userName: Joi
            .string()
            .min(2)
            .max(20)
            .required(),
        
        password: Joi
            .string()
            .min(8)
            .max(30)
            .required(),
    }),
    
    news: Joi.object<INews>({
        title: Joi
            .string()
            .min(1)
            .max(60)
            .required(),
        
        body: Joi
            .string()
            .min(1)
            .max(200)
            .required()
    }),
}
