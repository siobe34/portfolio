import mongoose from 'mongoose';

export interface MovieDocument extends mongoose.Document {
    title: string;
    ranking: number
};

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    ranking: {
        type: Number,
        required: true
    }
});

const MovieModel = mongoose.model('Movie', movieSchema);

export default MovieModel;