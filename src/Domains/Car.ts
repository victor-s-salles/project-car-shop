import ICar from '../Interfaces/ICar';

class Car {
  private id: string | undefined;
  private model: string;
  private year: number;
  private color: string;
  private status: boolean;
  private buyValue: number;
  private doorsQty: number;
  private seatsQty: number;

  constructor(car: ICar) {
    this.id = car.id;
    this.model = car.model;
    this.year = car.year;
    this.color = car.color;
    this.buyValue = car.buyValue;
    this.doorsQty = car.doorsQty;
    this.seatsQty = car.seatsQty;
    
    if (car.status) {
      this.status = car.status;
    } this.status = false;
  }

  public getId() {
    return this.id;
  }
  public setId(id: string) {
    this.id = id;
  }

  public getModel() {
    return this.model;
  }
  public setModel(value: string) {
    this.model = value;
  }

  public getYear() {
    return this.year;
  }
  public setYear(value: number) {
    this.year = value;
  }

  public getColor() {
    return this.color;
  }
  public setColor(value: string) {
    this.color = value;
  }

  public getStatus() {
    return this.status;
  }
  public setStatus(value: boolean) {
    this.status = value;
  }

  public getBuyValue() {
    return this.buyValue;
  }
  public setBuyValue(value: number) {
    this.buyValue = value;
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