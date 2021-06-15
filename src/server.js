import express, { json } from 'express';
import morgan from 'morgan';
import router from './routes';

const server = express();

server.use(morgan('dev'));
server.use(json())
server.use('/', router)

export default server;