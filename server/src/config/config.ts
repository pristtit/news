import  dotenv from "dotenv";

dotenv.config();

const MONGO_USERNAME = process.env.MONGO_USERNAME || '';
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || '';
const JWT_SECRET_ACCESS_KEY = process.env.JWT_SECRET_KEY || 'accessanykey'
const JWT_SECRET_REFRESH_KEY = process.env.JWT_SECRET_KEY || 'refreshanykey'

const MONGO_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.2mc4oun.mongodb.net/news`;

const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 1337;


export const config = {
    mongo: {
        url: MONGO_URL
    },
    server: {
        port: SERVER_PORT
    },
    jwt: {
        secretAccessKey: JWT_SECRET_ACCESS_KEY,
        secretRefreshKey: JWT_SECRET_REFRESH_KEY
    }
}