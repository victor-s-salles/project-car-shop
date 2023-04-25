import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import { carListGetResponse, carListMongoResponse, 
  newCarMongoResponse, newCarPost, newCarPostResponse } from './mocks/CarMock';
import CarService from '../../../src/Services/CarService';

describe('Testa a camada CarService', function () {
  it('Cadastrando novo carro', async function () {
    sinon.stub(Model, 'create').resolves(newCarMongoResponse);

    const service = new CarService();
    const result = await service.insertOneCar(newCarPost);

    expect(result).to.be.deep.equal(newCarPostResponse);
  });

  it('Buscando todos os carros', async function () {
    sinon.stub(Model, 'find').resolves(carListMongoResponse);

    const service = new CarService();
    const result = await service.findAll();

    expect(result).to.be.deep.equal(carListGetResponse);
  });

  it('Buscando um carro por id ', async function () {
    sinon.stub(Model, 'findById').resolves(newCarMongoResponse);

    const service = new CarService();
    const result = await service.findById('6448542ef7475359162577f1');

    expect(result).to.be.deep.equal(newCarPostResponse);
  });
});