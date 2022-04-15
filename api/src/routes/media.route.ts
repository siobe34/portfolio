import express from "express";
// * Import controllers for each respecctive model
import movieController from "../controllers/movie.controller";
import showController from "../controllers/show.controller";

// * Init express router for all media routes
// * All routes are prefixed with '/media'; see app initalization for media routes
const router = express.Router();

// * Forward all GET requests to controller function to handle the request
router.get("/movies", movieController.handleMovieQuery);
router.get("/shows", showController.handleShowQuery);

// * Forward all POST requests to controller function to handle the request
router.post("/movies", movieController.handleMovieCreation);
router.post("/shows", showController.handleShowCreation);

// * export the mediaRouter for initialization in the app
export default router;
