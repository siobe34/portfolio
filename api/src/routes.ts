import { Express, Request, Response} from 'express';


type DataTypes = {
    movies: string[];
    anime: string[];
    shows: string[];
    music: string[];
    [key: string]: string[]
}

const dummyData: DataTypes = {
    movies: [
        'Movie Example 1',
        'Movie Example 2',
        'Movie Example 3',
        'Movie Example 4'
    ],
    anime: [
        'Anime Example 1',
        'Anime Example 2',
        'Anime Example 3',
        'Anime Example 4'
    ],
    shows: [
        'Show Example 1',
        'Show Example 2',
        'Show Example 3',
        'Show Example 4'
    ],
    music: [
        'Music Example 1',
        'Music Example 2',
        'Music Example 3',
        'Music Example 4'
    ]
}

const routes = (app: Express) => {
    app.get('/:mediaType', (req: Request, res: Response) => {
        const mediaType: keyof DataTypes =   req.params.mediaType;
        if (!Object.keys(dummyData).includes(mediaType)) res.sendStatus(404);
        res.send(dummyData[mediaType]);
    })
}

export default routes;