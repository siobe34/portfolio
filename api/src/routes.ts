import { Express, Request, Response} from 'express';


const dummyData = {
    movies: [
        'Movie Example 1',
        'Movie Example 2',
        'Movie Example 2',
        'Movie Example 3'
    ],
    anime: [
        'Anime Example 1',
        'Anime Example 2',
        'Anime Example 2',
        'Anime Example 3'
    ],
    shows: [
        'Show Example 1',
        'Show Example 2',
        'Show Example 2',
        'Show Example 3'
    ],
    music: [
        'Music Example 1',
        'Music Example 2',
        'Music Example 2',
        'Music Example 3'
    ]
}

const routes = (app: Express) => {
    app.get('/test', (req: Request, res: Response) => {
        res.send(dummyData);
    })
}

export default routes;