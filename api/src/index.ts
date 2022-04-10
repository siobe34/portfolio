import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import config from './config/config';
import routes from './routes';

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

app.listen(config.port, () => {
    console.log(`API listening on port ${config.port}`);
    routes(app);
});