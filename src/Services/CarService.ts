import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

class CarService {
  private createCarDomain(car: ICar | null) {
    if (car) {
      return new Car(car);
    }
  }

  public async insertOneCar(car: ICar): Promise<Car | undefined> {
    const carODM = new CarODM();
    const result = await carODM.create(car);

    return this.createCarDomain(result);
  }

  public async findAll(): Promise<(Car | undefined)[] | undefined> {
    const carODM = new CarODM();
    const result = await carODM.findAll();
    const carList = result?.map((car) => this.createCarDomain(car));
    return carList;
  }

  public async findById(id: string): Promise <Car | undefined> {
    const carODM = new CarODM();
    const result = await carODM.findById(id);

    return this.createCarDomain(result);
  }

  public async updateOne(id: string, car: ICar):Promise <Car | undefined> {
    const carODM = new CarODM();
    const result = await carODM.update(id, car);

    return this.createCarDomain(result);
  }
  public async removeOne(id:string): Promise<boolean> {
    const carODM = new CarODM();
    const result = await carODM.remove(id);
    console.log(result);

    if (result) {
      return true;
    }
    return false;
  }
}
export default CarService;