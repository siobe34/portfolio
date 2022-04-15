import { Request, Response } from "express";

// * Import services to process database queries/creations
import movieServices from "../services/movie.service";

// * Export function to handle querying movies from the database
exports.handleMovieQuery = async (req: Request, res: Response) => {
    try {
        // * Call service to query movie collection
        const query = await movieServices.getMovie();
        // * Return query
        res.send(query);
    } catch (err) {
        // * Log potential error thrown from movieServices.getMovie()
        console.log(err);
        // * Return 400 bad request if query for movie documents could not be completed
        return res.sendStatus(400);
    }
};

exports.handleMovieCreation = async (req: Request, res: Response) => {
    try {
        // * Call service to create the movie using client input
        const movieCreationStatus = await movieServices.createMovie(req.body);
        // * Return movie document if successfully created
        res.status(201).send(movieCreationStatus);
    } catch (err) {
        // * Log potential error thrown from movieServices.createMovie()
        console.log(err);
        // * Return 400 bad request if movie document could not be created
        return res.sendStatus(400);
    }
};

export default exports;
