import mongoose from "mongoose";

export interface MovieInput {
    title: string;
    ranking: number;
}
export interface MovieDocument extends mongoose.Document {
    title: string;
    ranking: number;
}

const movieSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        ranking: {
            type: Number,
            required: true,
            unique: true
        }
    },
    {
        timestamps: true
    }
);

const MovieModel = mongoose.model<MovieDocument>("Movie", movieSchema);

export default MovieModel;
