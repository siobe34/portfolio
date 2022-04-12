import express from 'express';

import movieController from '../controllers/movie.controller';

const router = express.Router();

router.get('/movies', movieController.handleMovieQuery);

router.post('/movies', movieController.handleMovieCreation);

export default router;