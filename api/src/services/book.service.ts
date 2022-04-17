// * Import Model and Input Type for type validations
import BookModel, { BookInput } from "../models/book.model";

// * Query database
exports.getBooks = async () => {
    try {
        // * Query database for all books
        const result = await BookModel.find({});
        // * Return output of all books in an array
        return result;
    } catch (err) {
        // * Throw error to caller
        throw err;
    }
};

// * Create new Book instance accepting input of type BookInput
exports.createBook = async (input: BookInput) => {
    try {
        // * Create new Book instance and commit to database
        const result = await BookModel.create(input);
        // * Return newly created Book instance
        return result;
    } catch (err) {
        // * Throw error to caller
        throw err;
    }
};

export default exports;
