import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import connectDatabase from './utils/connectDatabase';
import config from './config/config';
import mediaRouter from './routes/media.route';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/media', mediaRouter);

app.listen(config.port, async () => {
    console.log(`[INFO]: Server listening on port ${config.port}`);
    
    await connectDatabase();
});