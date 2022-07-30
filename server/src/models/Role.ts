import mongoose, { Document, Schema } from "mongoose";

export interface IRole {
    roles: string
}

export interface IRoleModel extends IRole, Document {}

const Role: Schema = new Schema(
    {
        roles: { type: String, default: "User" }
    },
    {
        versionKey: false
    }
);

export default mongoose.model<IRoleModel>('Role', Role);