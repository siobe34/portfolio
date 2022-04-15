import mongoose from "mongoose";

export interface ShowInput {
    title: string;
}
export interface ShowDocument extends mongoose.Document {
    title: string;
}

const showSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const ShowModel = mongoose.model<ShowDocument>("Show", showSchema);

export default ShowModel;
