// @see https://docs.aircode.io/guide/functions/
const aircode = require('aircode');

module.exports = async function (params, context) {
  console.log('Received params:', params);
 const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  await sleep(10000);
 
  return {
    message: 'Hi, AirCode.',
  };
};
