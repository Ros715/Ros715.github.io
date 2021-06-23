const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = (transaction /*, onSuccess, onError*/) => {
  const delay = randomIntegerFromInterval(200, 500);

  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const canProcess = Math.random() > 0.3;

      if (canProcess) {
        /*onSuccess*/ resolve({ id: transaction.id, delay: delay });
      } else {
        /*onError*/ reject(transaction.id);
      }
    }, delay);
  });
};

const logSuccess = (/*id, time*/ ob) => {
  console.log(`Transaction ${ob.id} processed in ${ob.delay}ms`);
};

const logError = (id) => {
  console.warn(`Error processing transaction ${id}. Please try again later.`);
};

/*
 * Работает так
 */
//makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
//makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);
//makeTransaction({ id: 72, amount: 75 }, logSuccess, logError);
//makeTransaction({ id: 73, amount: 100 }, logSuccess, logError);
/*
 * Должно работать так
 */
makeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(logError);

makeTransaction({ id: 71, amount: 230 }).then(logSuccess).catch(logError);

makeTransaction({ id: 72, amount: 75 }).then(logSuccess).catch(logError);

makeTransaction({ id: 73, amount: 100 }).then(logSuccess).catch(logError);
