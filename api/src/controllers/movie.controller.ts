import { Request, Response } from 'express';
import MovieModel from '../models/movie.model';

exports.createMovie = (req: Request, res: Response) => {
    res.send('Add a new movie to the database.');
};

export default exports;