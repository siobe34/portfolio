import { Request, Response } from "express";

// * Import services to process database queries/creations
import bookServices from "../services/book.service";

// * Export function to handle querying book from the database
exports.handleBookQuery = async (req: Request, res: Response) => {
    try {
        // * Call service to query book collection
        const query = await bookServices.getBooks();
        // * Return query
        res.send(query);
    } catch (err) {
        // * Log potential error thrown from bookServices.getBooks()
        console.log(err);
        // * Return 400 bad request if query for book documents could not be completed
        return res.sendStatus(400);
    }
};

// * Export function to handle creation of Book document
exports.handleBookCreation = async (req: Request, res: Response) => {
    try {
        // * Call service to create the book using client input
        const bookCreationStatus = await bookServices.createBook(req.body);
        // * Return book document if successfully created
        res.status(201).send(bookCreationStatus);
    } catch (err) {
        // * Log potential error thrown from bookServices.createBook()
        console.log(err);
        // * Return 400 bad request if book document could not be created
        return res.sendStatus(400);
    }
};

export default exports;
