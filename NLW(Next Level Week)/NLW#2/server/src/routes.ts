import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();
const classesContollers = new ClassesController();
const connectionsController = new ConnectionsController();

routes.post('/classes', classesContollers.create);
routes.get('/classes', classesContollers.index);

routes.post('/connections', connectionsController.create);
routes.get('/connections', connectionsController.index);

export default routes;