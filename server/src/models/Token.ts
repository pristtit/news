import mongoose, { Document, Schema } from "mongoose";

export interface IToken {
    accessToken: string;
    refreshToken: string;
}

export interface ITokenModel extends IToken, Document {}

const TokenSchema: Schema = new Schema(
    {
        user: { type: Schema.Types.ObjectId, ref: 'UserSchema' },
        refreshToken: { type: String, required: true }
    }
);

export default mongoose.model<ITokenModel>('TokenSchema', TokenSchema);