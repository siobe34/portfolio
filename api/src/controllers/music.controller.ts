import { Request, Response } from "express";

// * Import services to process database queries/creations
import musicServices from "../services/music.service";

// * Export function to handle querying music from the database
exports.handleMusicQuery = async (req: Request, res: Response) => {
    try {
        // * Call service to query music collection
        const query = await musicServices.getMusic();
        // * Return query
        res.send(query);
    } catch (err) {
        // * Log potential error thrown from musicServices.getMusic()
        console.log(err);
        // * Return 400 bad request if query for music documents could not be completed
        return res.sendStatus(400);
    }
};

// * Export function to handle creation of Music document
exports.handleMusicCreation = async (req: Request, res: Response) => {
    try {
        // * Call service to create the music using client input
        const musicCreationStatus = await musicServices.createMusic(req.body);
        // * Return music document if successfully created
        res.status(201).send(musicCreationStatus);
    } catch (err) {
        // * Log potential error thrown from musicServices.createMusic()
        console.log(err);
        // * Return 400 bad request if music document could not be created
        return res.sendStatus(400);
    }
};

export default exports;
