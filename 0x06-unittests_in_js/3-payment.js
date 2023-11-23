const Utils = require('./utils');

function sendPaymentRequestToApi (totalAmount, totalShipping) {
    const fee = Utils.calculateNumber('SUM', totalAmount, totalShipping);
    console.log(`The total is: ${fee}`);
}

module.exports = sendPaymentRequestToApi;