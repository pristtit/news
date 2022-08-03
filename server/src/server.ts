import express from "express";
import http from "http";
import mongoose from "mongoose";
import { config } from "./config/config";
import Loging from "./library/Loging";
import newsRoutes from './routes/News';
import userRoutes from './routes/User';

const router = express();

mongoose
    .connect(config.mongo.url, { retryWrites: true , w: 'majority' })
    .then(() => {
        Loging.info('Connected to mongoDB');
        startServer();
    })
    .catch((error) => {
        Loging.error('Unable to connect: ');
        Loging.error(error);
    })

const startServer = () => {
    router.use((req, res, next) => {
        Loging.info(`Incoming -> Metod: [${req.method}] - URL: [${req.url}]` +
        `- IP: [${req.socket.remoteAddress}]`);

        res.on('finish', () => {
            Loging.info(`Outgoing -> Metod: [${req.method}] - URL: [${req.url}]` +
            `- IP: [${req.socket.remoteAddress}] Status: [${res.statusCode}]`);
        })

        next();
    });

    router.use(express.urlencoded({extended: true}));
    router.use(express.json());

    router.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type,Accept, Authorization');

        if (req.method == 'OPTIONS') {
            res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
            return res.status(200).json({});
        }

        next();
    });


    router.use('/api/news', newsRoutes);
    router.use('/api/users', userRoutes);

    router.use((req, res, next) => {
        const error = new Error('notFound');
        Loging.error(error);

        return res.status(404).json({ message: error.message });
    });

    http.createServer(router).listen(config.server.port, () => Loging.info(
        `Server is running on port ${config.server.port}`
    ));
}