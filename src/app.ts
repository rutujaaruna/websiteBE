import express, { Express, Request, Response } from 'express';
import * as dotenv from 'dotenv';
import { AppDataSource } from './data-source';
import logger from './utils/winston';
dotenv.config();

const app: Express = express();
const port = process.env.PORT;

AppDataSource.initialize().then(async () => {
    logger.info('Database connected successfully!!');
    app.listen(port, () => {
        return logger.info(`Express is listening at ${process.env.PORT}`);
    });
}).catch(error => logger.error(error));

export default app;