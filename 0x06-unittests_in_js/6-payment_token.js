function getPaymentTokenFromAPI(success) {
    if (success) {
      return new Promise((resolve) => {
        resolve({ data: 'Successful response from the API' });
      });
    } else {
      // Return a rejected promise for failure case
      return Promise.reject(new Error('API request failed'));
    }
  }
  
  module.exports = getPaymentTokenFromAPI;
  