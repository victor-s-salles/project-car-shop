import { Model, Schema, models, model, UpdateQuery } from 'mongoose';

abstract class AbstractODM <T> {
  protected model: Model<T>;
  private schema: Schema;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(modelName, this.schema);
  }

  public async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }

  public async findAll(): Promise<T[] | null> {
    return this.model.find({});
  }
  public async findById(id: string): Promise<T | null> {
    return this.model.findById(id);
  }
  public async update(id: string, obj: UpdateQuery<T>): Promise<T | null> {
    return this.model.findByIdAndUpdate(id, { ...obj }, { new: true });
  }
  public async remove(id: string) : Promise<T | null> {
    return this.model.findByIdAndDelete(id);
  }
}

export default AbstractODM;