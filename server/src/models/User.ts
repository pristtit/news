import mongoose, { Document, Schema } from "mongoose";

export interface IUser {
    userName: string
    password: string
}

export interface IUserModel extends IUser, Document {}

const UserSchema: Schema = new Schema(
    {
        userName: { type: String, required: true, unique: true},
        password: { type: String, required: true },
    },
    {
        versionKey: false
    }
);

export default mongoose.model<IUserModel>('UserSchema', UserSchema);