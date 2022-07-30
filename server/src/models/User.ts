import mongoose, { Document, Schema } from "mongoose";

export interface IUser {
    name: string
    password: string
    roles: string
}

export interface IUserModel extends IUser, Document {}

const User: Schema = new Schema(
    {
        username: { type: String, required: true },
        password: { type: String, required: true },
        roles: { type: String, ref: 'Role' }
    },
    {
        versionKey: false
    }
);

export default mongoose.model<IUserModel>('Author', User);