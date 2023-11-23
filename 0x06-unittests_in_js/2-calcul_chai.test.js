const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai.js');


describe('calculateNumber', function () {
  it('should add two numbers when type is SUM', function () {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.be.equal(6);
  });

  it('should subtract b from a when type is SUBTRACT', function () {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.be.equal(-4);
  });

  it('should divide a by b when type is DIVIDE', function () {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.be.equal(0.2);
  });

  it('should return "Error" when trying to divide by 0', function () {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.be.equal('Error');
  });

  it('should throw an error for invalid type', function () {
    expect(() => calculateNumber('INVALID_TYPE', 1.4, 4.5)).to.throw(Error);
  });
});