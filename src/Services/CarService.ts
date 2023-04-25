import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

class CarService {
  private createCarDomain(car: ICar | undefined): Car | undefined {
    if (car) {
      return new Car(car);
    }
  }

  public async insertOneCar(car: ICar) {
    const carODM = new CarODM();
    const result = await carODM.create(car);

    return this.createCarDomain(result);
  }
}

export default CarService;