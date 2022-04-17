import mongoose from "mongoose";

export interface AnimeInput {
    title: string;
}
export interface AnimeDocument extends mongoose.Document {
    title: string;
}

const animeSchema = new mongoose.Schema(
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

const AnimeModel = mongoose.model<AnimeDocument>("Anime", animeSchema);

export default AnimeModel;
