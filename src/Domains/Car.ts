import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

class Car extends Vehicle {
  private doorsQty: number;
  private seatsQty: number;

  constructor(car: ICar) {
    super(car);
    this.doorsQty = car.doorsQty;
    this.seatsQty = car.seatsQty;
  }

  public getDoorsQty() {
    return this.doorsQty;
  }
  public setDoorsQty(value: number) {
    this.doorsQty = value;
  }

  public getSeatsQty() {
    return this.seatsQty;
  }
  public setSeatsQty(value: number) {
    this.seatsQty = value;
  }
}

export default Car;