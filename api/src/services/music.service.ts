// * Import Model and Input Type for type validations
import MusicModel, { MusicInput } from "../models/music.model";

// * Query database
exports.getMusic = async () => {
    try {
        // * Query database for all music
        const result = await MusicModel.find({});
        // * Return output of all music in an array
        return result;
    } catch (err) {
        // * Throw error to caller
        throw err;
    }
};

// * Create new Music instance accepting input of type MusicInput
exports.createMusic = async (input: MusicInput) => {
    try {
        // * Create new Music instance and commit to database
        const result = await MusicModel.create(input);
        // * Return newly created Music instance
        return result;
    } catch (err) {
        // * Throw error to caller
        throw err;
    }
};

export default exports;
