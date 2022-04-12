import { Request, Response } from "express";
import movieServices from "../services/movie.service";

exports.handleMovieQuery = async (req: Request, res: Response) => {
    const query = await movieServices.getMovie();

    if (!query) return res.sendStatus(404);

    res.send(query);
};

exports.handleMovieCreation = async (req: Request, res: Response) => {
    const movieCreationStatus = await movieServices.createMovie(req.body);

    if (!movieCreationStatus) return res.sendStatus(404);

    res.send(movieCreationStatus);
};

export default exports;
