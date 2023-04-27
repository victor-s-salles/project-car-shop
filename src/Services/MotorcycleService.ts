import IMotorcycle from '../Interfaces/IMotorcycle';
import Motorcycle from '../Domains/Motorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

class MotorcycleService {
  private createMotorcycleDomain(motorcycle: IMotorcycle | null) {
    if (motorcycle) {
      return new Motorcycle(motorcycle);
    }
  }

  public async insertOneMotorcycle(motorcycle: IMotorcycle): | Promise<Motorcycle | undefined> {
    const motorcycleODM = new MotorcycleODM();
    const result = await motorcycleODM.create(motorcycle);

    return this.createMotorcycleDomain(result);
  }

  public async findAll(): Promise<(Motorcycle | undefined)[] | undefined> {
    const motorcycleODM = new MotorcycleODM();
    const result = await motorcycleODM.findAll();
    const motorcycleList = result?.map((motorcycle) => this.createMotorcycleDomain(motorcycle));
    return motorcycleList;
  }

  public async findById(id: string):Promise <Motorcycle | undefined> {
    const motorcycleODM = new MotorcycleODM();
    const result = await motorcycleODM.findById(id);
    return this.createMotorcycleDomain(result);
  }

  public async updateOne(id: string, motorcycle: IMotorcycle): Promise<Motorcycle | undefined> {
    const motorcycleODM = new MotorcycleODM();
    const result = await motorcycleODM.update(id, motorcycle);
    return this.createMotorcycleDomain(result);
  }
  public async removeOne(id:string): Promise <Motorcycle | undefined> {
    const carODM = new MotorcycleODM();
    const result = await carODM.remove(id);

    return this.createMotorcycleDomain(result);
  }
}

export default MotorcycleService;