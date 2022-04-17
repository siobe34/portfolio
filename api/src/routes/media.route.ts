import express from "express";
// * Import controllers for each respecctive model
import movieController from "../controllers/movie.controller";
import showController from "../controllers/show.controller";
import animeController from "../controllers/anime.controller";
import musicController from "../controllers/music.controller";
import bookController from "../controllers/book.controller";

// * Init express router for all media routes
// * All routes are prefixed with '/media'; see app initalization for media routes
const router = express.Router();

// * Forward all GET requests to controller function to handle the request
router.get("/movies", movieController.handleMovieQuery);
router.get("/shows", showController.handleShowQuery);
router.get("/anime", animeController.handleAnimeQuery);
router.post("/music", musicController.handleMusicQuery);
router.post("/books", bookController.handleBookQuery);

// * Forward all POST requests to controller function to handle the request
router.post("/movies", movieController.handleMovieCreation);
router.post("/shows", showController.handleShowCreation);
router.post("/anime", animeController.handleAnimeCreation);
router.post("/music", musicController.handleMusicCreation);
router.post("/books", bookController.handleBookCreation);

// * export the mediaRouter for initialization in the app
export default router;
