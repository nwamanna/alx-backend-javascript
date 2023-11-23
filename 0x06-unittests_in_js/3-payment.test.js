const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');

describe ('sendPaymentRequestToApi', function () {
    it('should call Utils.calculateNumber with the correct arguments and log the result', function () {
        const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
        sendPaymentRequestToApi(100, 20);
        assert(calculateNumberSpy.calledOnceWith('SUM', 100, 20));
        //restore spy
        calculateNumberSpy.restore();
    });

});