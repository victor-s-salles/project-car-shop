import { Request, Response, NextFunction } from 'express';
import { ObjectId } from 'mongodb';
import CarService from '../Services/CarService';

class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  } 
  private isValidId(id: string):boolean {
    try {
      if (new ObjectId(id).toString() === id) {
        return true;
      }
    } catch (error) {
      return false;
    }
    return false;
  }

  public async insertOneCar() {
    const car = this.req.body;

    try {
      const newCar = await this.service.insertOneCar(car);
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }
  public async findAll() {
    try {
      const carList = await this.service.findAll();
      return this.res.status(200).json(carList);
    } catch (error) {
      this.next(error);
    }
  }
  public async findById() {
    const { id } = this.req.params;
    if (!this.isValidId(id)) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }

    try {
      const car = await this.service.findById(id);
      if (!car) {
        return this.res.status(404).json({ message: 'Car not found' });
      }
      return this.res.status(200).json(car);
    } catch (error) {
      this.next(error);
    }
  }
}

export default CarController;