import { Request, Response } from "express";

// * Import services to process database queries/creations
import animeServices from "../services/anime.service";

// * Export function to handle querying anime from the database
exports.handleAnimeQuery = async (req: Request, res: Response) => {
    try {
        // * Call service to query anime collection
        const query = await animeServices.getAnime();
        // * Return query
        res.send(query);
    } catch (err) {
        // * Log potential error thrown from animeServices.getAnime()
        console.log(err);
        // * Return 400 bad request if query for anime documents could not be completed
        return res.sendStatus(400);
    }
};

// * Export function to handle creation of Anime document
exports.handleAnimeCreation = async (req: Request, res: Response) => {
    try {
        // * Call service to create the anime using client input
        const animeCreationStatus = await animeServices.createAnime(req.body);
        // * Return anime document if successfully created
        res.status(201).send(animeCreationStatus);
    } catch (err) {
        // * Log potential error thrown from animeServices.createAnime()
        console.log(err);
        // * Return 400 bad request if anime document could not be created
        return res.sendStatus(400);
    }
};

export default exports;
