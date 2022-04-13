import mongoose from "mongoose";

export interface MovieInput {
    title: string;
}
export interface MovieDocument extends mongoose.Document {
    title: string;
}

const movieSchema = new mongoose.Schema(
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

const MovieModel = mongoose.model<MovieDocument>("Movie", movieSchema);

export default MovieModel;
