const assert = require('assert');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
  it('should resolve with the correct data for success=true', function (done) {
    getPaymentTokenFromAPI(true)
      .then((result) => {
        // Assert that the promise resolved with the expected data
        assert.deepStrictEqual(result, { data: 'Successful response from the API' });
        // Call done to signal the end of the async test
        done();
      })
      .catch((error) => {
        // Call done with the error if the promise is rejected
        done(error);
      });
  });

  it('should reject with an error for success=false', function (done) {
    getPaymentTokenFromAPI(false)
      .then(() => {
        // Call done with an error if the promise resolves (which should not happen)
        done(new Error('Expected promise to be rejected, but it was resolved.'));
      })
      .catch((error) => {
        // Assert that the promise was rejected with the expected error
        assert.equal(error.message, 'API request failed');
        // Call done to signal the end of the async test
        done();
      });
  });
});
