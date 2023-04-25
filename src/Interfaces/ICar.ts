interface ICar {
  id?: string;
  model: string;
  year: number;
  color: string;
  status?: boolean;
  buyValue: number;
  doorsQts: number;
  seatsQty: number;
}

export default ICar;