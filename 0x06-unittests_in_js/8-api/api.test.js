const request = require('request');
const { expect } = require('chai');
const app = require('./api');

describe('Index page', function () {
  let server;

  before(function (done) {
    // Start the server before running the tests
    server = app.listen(7865, () => {
      done();
    });
  });

  after(function () {
    // Close the server after running the tests
    server.close();
  });

  it('should return correct status code', function (done) {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct result', function (done) {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  // Add other tests if needed

});
