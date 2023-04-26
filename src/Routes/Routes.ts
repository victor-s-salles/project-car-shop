import { Router } from 'express';
import CarController from '../Controllers/CarController';
import MotorcycleController from '../Controllers/MotorcycleController';

const routes = Router();

routes.post('/cars', (req, res, next) => new CarController(req, res, next).insertOneCar());

routes.get('/cars/:id', (req, res, next) => new CarController(req, res, next).findById());

routes.get('/cars', (req, res, next) => new CarController(req, res, next).findAll());

routes.post(
  '/motorcycles', 
  (req, res, next) => new MotorcycleController(req, res, next).insertOneCar(),
);

export default routes;