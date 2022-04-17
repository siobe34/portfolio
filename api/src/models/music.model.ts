import mongoose from "mongoose";

export interface MusicInput {
    title: string;
}
export interface MusicDocument extends mongoose.Document {
    title: string;
}

const musicSchema = new mongoose.Schema(
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

const MusicModel = mongoose.model<MusicDocument>("Music", musicSchema);

export default MusicModel;
