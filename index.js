const callbackExample = require('./callback');
const promiseExample = require('./promise');
const numberToMultiplicate = 12;
const stringToTestErrorHandle = 'Curso IBM Node.js + Angular';

callbackExample(numberToMultiplicate, function (error, result, multiplicator) {
  if (!error) {
    console.log(`O número ${numberToMultiplicate} multiplicado por ${multiplicator} resulta em ${result}.`)
  } else {
    console.log(error);
  }
});

return promiseExample(numberToMultiplicate)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));