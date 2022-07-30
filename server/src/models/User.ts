import mongoose, { Document, Schema } from "mongoose";

export interface IUser {
    username: string
    password: string
}

export interface IUserModel extends IUser, Document {}

const UserSchema: Schema = new Schema(
    {
        username: { type: String, required: true, unique: true},
        password: { type: String, required: true },
    }
);

export default mongoose.model<IUserModel>('UserSchema', UserSchema);