import { Request, Response } from "express";

// * Import services to process database queries/creations
import showServices from "../services/show.service";

// * Export function to handle querying shows from the database
exports.handleShowQuery = async (req: Request, res: Response) => {
    try {
        // * Call service to query shows collection
        const query = await showServices.getShow();
        // * Return query
        res.send(query);
    } catch (err) {
        // * Log potential error thrown from showServices.getShow()
        console.log(err);
        // * Return 400 bad request if query for show documents could not be completed
        return res.sendStatus(400);
    }
};

// * Export function to handle creation of Show document
exports.handleShowCreation = async (req: Request, res: Response) => {
    try {
        // * Call service to create the show using client input
        const showCreationStatus = await showServices.createShow(req.body);
        // * Return show document if successfully created
        res.status(201).send(showCreationStatus);
    } catch (err) {
        // * Log potential error thrown from showServices.createShow()
        console.log(err);
        // * Return 400 bad request if show document could not be created
        return res.sendStatus(400);
    }
};

export default exports;
