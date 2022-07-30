import mongoose, { Document, Schema } from "mongoose";

export interface INews {
    title: string
    body: string
}

export interface INewsModel extends INews, Document {}

const NewsSchema: Schema = new Schema(
    {
        title: { type: String, required: true },
        body: { type: String, required: true },
    }
);

export default mongoose.model<INewsModel>('NewsSchema', NewsSchema);