const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function () {
  let consoleLogStub;

  // Setup: beforeEach hook
  beforeEach(function () {
    // Stub console.log to capture log messages
    consoleLogStub = sinon.stub(console, 'log');
  });

  // Cleanup: afterEach hook
  afterEach(function () {
    // Restore the stub after each test
    consoleLogStub.restore();
  });

  it('should log "The total is: 120" when called with 100 and 20', function () {
    sendPaymentRequestToApi(100, 20);

    // Assert that console.log was called with the correct message
    assert.equal(consoleLogStub.firstCall.args[0], 'The total is: 120');

    // Assert that console.log was only called once
    assert(consoleLogStub.calledOnce);
  });

  it('should log "The total is: 20" when called with 10 and 10', function () {
    sendPaymentRequestToApi(10, 10);

    // Assert that console.log was called with the correct message
    assert.equal(consoleLogStub.firstCall.args[0], 'The total is: 20');

    // Assert that console.log was only called once
    assert(consoleLogStub.calledOnce);
  });
});
