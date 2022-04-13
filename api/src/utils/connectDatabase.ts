import mongoose from "mongoose";
import config from "../config/config";

async function connectDatabase() {
    try {
        await mongoose.connect(config.dbURI);
        console.log(`[INFO]: Succesfully connected to database: ${config.dbURI}`);
    } catch (err) {
        console.error(err);
        console.log(`[INFO]: Unsuccesful connection to database: ${config.dbURI}`);
        process.exit(1);
    }
}

export default connectDatabase;
