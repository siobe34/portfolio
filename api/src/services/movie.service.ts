import MovieModel, { MovieInput } from "../models/movie.model";

exports.getMovie = async () => {
    try {
        const result = await MovieModel.find({});
        return result;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

// TODO: Check if Type validation on createMovie works

exports.createMovie = async (input: MovieInput) => {
    try {
        const result = await MovieModel.create(input);
        return result;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

export default exports;
