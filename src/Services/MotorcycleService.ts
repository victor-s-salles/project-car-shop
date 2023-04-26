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
}

export default MotorcycleService;