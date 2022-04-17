// * Import Model and Input Type for type validations
import AnimeModel, { AnimeInput } from "../models/anime.model";

// * Query database
exports.getAnime = async () => {
    try {
        // * Query database for all anime
        const result = await AnimeModel.find({});
        // * Return output of all anime in an array
        return result;
    } catch (err) {
        // * Throw error to caller
        throw err;
    }
};

// * Create new Anime instance accepting input of type AnimeInput
exports.createAnime = async (input: AnimeInput) => {
    try {
        // * Create new Anime instance and commit to database
        const result = await AnimeModel.create(input);
        // * Return newly created Anime instance
        return result;
    } catch (err) {
        // * Throw error to caller
        throw err;
    }
};

export default exports;
