const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./4-payment.js');

describe('sendPaymentRequestToApi', function () {
    it('should call Utils.calculateNumber with the correct arguments and log the result', function () {
        // Stub Utils.calculateNumber to always return 10
        const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

        //spy on console log
        const consoleLogSpy = sinon.spy(console, 'log');

        sendPaymentRequestToApi(100, 20);

        assert(calculateNumberStub.calledOnceWith('SUM', 100, 20));
        assert(consoleLogSpy.calledOnceWith(`The total is: 10`));

        // restore the stub and spy after the test
        calculateNumberStub.restore();
        consoleLogSpy.restore();
    });
});