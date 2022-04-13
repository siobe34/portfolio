import dotenv from "dotenv";

dotenv.config();

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || "localhost";
const SERVER_PORT = process.env.SERVER_PORT || 1337;
const SERVER_DATABASE_URI = process.env.SERVER_DATABASE_URI || "mongodb://localhost:27017/portfolio-site";

type ConfigTypes = {
    hostname: string;
    port: string | number;
    dbURI: string;
};

const config: ConfigTypes = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT,
    dbURI: SERVER_DATABASE_URI
};

export default config;
