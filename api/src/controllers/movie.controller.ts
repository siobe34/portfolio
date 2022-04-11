import { Request, Response } from 'express';
import movieServices from '../services/movie.service';

exports.handleMovieQuery = (req: Request, res: Response) => {
    res.send(movieServices.getMovie());
}

exports.handleMovieCreation = (req: Request, res: Response) => {
    const movieCreationStatus  = movieServices.createMovie(req.body);
    
    if (movieCreationStatus) {
        res.send(`Added a new movie to the database with:\nTitle: ${req.body.title}\nRanking: ${req.body.ranking}`);
        return;
    };
    
    res.send('Could not create the new movie.');
};

export default exports;