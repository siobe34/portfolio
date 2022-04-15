// * Import Model and Input Type for type validations
import MovieModel, { MovieInput } from "../models/movie.model";

// * Query database
exports.getMovie = async () => {
    try {
        // * Query database for all movies
        const result = await MovieModel.find({});
        // * Return output of all movies in an array
        return result;
    } catch (err) {
        // * Throw error to caller
        throw err;
    }
};

// * Create new Movie instance accepting input of type MovieInput
exports.createMovie = async (input: MovieInput) => {
    try {
        // * Create new Movie instance and commit to database
        const result = await MovieModel.create(input);
        // * Return newly created Movie instance
        return result;
    } catch (err) {
        // * Throw error to caller
        throw err;
    }
};

export default exports;
