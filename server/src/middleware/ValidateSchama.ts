import Joi, { ObjectSchema } from "joi";
import { NextFunction, Response, Request } from "express";
import Loging from "../library/Loging";
import { IUser } from "../models/User";

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
            .alphanum()
            .min(2)
            .max(20)
            .required(),
        
        password: Joi
            .string()
            .min(8)
            .max(20)
            .required()
    })       
}
