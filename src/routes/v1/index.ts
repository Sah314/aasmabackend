import express from 'express';
import healthRouter from './health';
import topapiRouter from './topapis';
import batchapiRouter from './batchapis';

const v1Router = express.Router();

// Use the routers for specific APIs
v1Router.use('/health', healthRouter);
v1Router.use('/top', topapiRouter);
v1Router.use('/batch', batchapiRouter);

export default v1Router;