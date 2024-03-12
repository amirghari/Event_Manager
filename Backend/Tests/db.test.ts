import { expect } from 'chai';
import sinon from 'sinon';
import mongoose from 'mongoose';
import { connectToMongoDB } from '../Config/db'; // Adjust the import path as needed
import { URI } from '../Utils/config';

describe('connectToMongoDB', function() {
  let logStub: sinon.SinonStub;
  let exitStub: sinon.SinonStub;
  let mongooseConnectStub: sinon.SinonStub;


  beforeEach(() => {
    logStub = sinon.stub(console, 'log');
    exitStub = sinon.stub(process, 'exit');
    mongooseConnectStub = sinon.stub(mongoose, 'connect');
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should establish a connection to the database', async function() {
    mongooseConnectStub.resolves(); // Simulate a successful connection

    await connectToMongoDB();

    expect(mongooseConnectStub.calledWith(URI)).to.be.true;
    expect(logStub.calledWith('Connection to DB established')).to.be.true;
    expect(exitStub.called).to.be.false;
  });

  it('should fail to connect to the database and exit', async function() {
    mongooseConnectStub.rejects(new Error('Connection failed')); // Simulate a failed connection

    await connectToMongoDB();

    expect(mongooseConnectStub.calledWith(URI)).to.be.true;
    expect(logStub.calledWith('Connection to DB failed')).to.be.true;
    expect(exitStub.calledWith(1)).to.be.true;
  });
});

