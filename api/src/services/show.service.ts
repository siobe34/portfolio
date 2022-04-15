// * Import Model and Input Type for type validations
import ShowModel, { ShowInput } from "../models/show.model";

// * Query database
exports.getShow = async () => {
    try {
        // * Query database for all shows
        const result = await ShowModel.find({});
        // * Return output of all shows in an array
        return result;
    } catch (err) {
        // * Throw error to caller
        throw err;
    }
};

// * Create new Show instance accepting input of type ShowInput
exports.createShow = async (input: ShowInput) => {
    try {
        // * Create new Show instance and commit to database
        const result = await ShowModel.create(input);
        // * Return newly created Show instance
        return result;
    } catch (err) {
        // * Throw error to caller
        throw err;
    }
};

export default exports;
