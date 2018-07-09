module.exports = function callbackExample(valueToHandle, callback) {
  let error;
  if (isNaN(valueToHandle)) {
    error = 'Valor não é um número';
  }
  const result = valueToHandle * Math.PI;
  callback(error, result, Math.PI);
}