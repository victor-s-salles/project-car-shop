import { Router } from 'express';
import CarController from '../Controllers/CarController';

const routes = Router();

routes.post('/cars', (req, res, next) => new CarController(req, res, next).insertOneCar());

routes.get('/cars', (req, res, next) => new CarController(req, res, next).findAll());

export default routes;