import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';

import MotorcycleService from '../../../src/Services/MotorcycleService';
import { MotorCyclesListGetResponse, MotorCyclesListMongoResponse, newMotorCyclesMongoResponse, 
  newMotorCyclesPost, newMotorCyclesPostResponse } from './mocks/MotorcyclesMock';

describe('Testa a camada MotorcycleService', function () {
  it('Cadastrando nova moto', async function () {
    sinon.stub(Model, 'create').resolves(newMotorCyclesMongoResponse);

    const service = new MotorcycleService();
    const result = await service.insertOneMotorcycle(newMotorCyclesPost);

    expect(result).to.be.deep.equal(newMotorCyclesPostResponse);
  });

  it('Buscando todos as motos', async function () {
    sinon.stub(Model, 'find').resolves(MotorCyclesListMongoResponse);

    const service = new MotorcycleService();
    const result = await service.findAll();

    expect(result).to.be.deep.equal(MotorCyclesListGetResponse);
  });
  it('Buscando um carro por id ', async function () {
    sinon.stub(Model, 'findById').resolves(newMotorCyclesMongoResponse);

    const service = new MotorcycleService();
    const result = await service.findById('6348513f34c397abcad040b2');

    expect(result).to.be.deep.equal(newMotorCyclesPostResponse);
  });
  afterEach(function () {
    sinon.restore();
  });
});