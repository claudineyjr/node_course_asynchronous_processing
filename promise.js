function promiseExample(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isNaN(value)) {
        reject('O valor não é numérico');
      }
      resolve(`O valor ${value} multiplicado por 5 é ${value * 5}`);
    }, 3000);

  });
}

module.exports = promiseExample;