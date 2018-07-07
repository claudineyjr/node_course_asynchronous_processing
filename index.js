const callbackExample = require('./callback');
const numberToMultiplicate = 12;
const stringToTestErrorHandle = 'Curso IBM Node.js + Angular';

callbackExample(numberToMultiplicate, function(error, result, multiplicator) {
    if (!error) {
        console.log(`O número ${numberToMultiplicate} multiplicado por ${multiplicator} resulta em ${result}.`)
    } else {
        console.log(error);
    }
});