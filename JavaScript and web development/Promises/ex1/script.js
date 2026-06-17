function checkLuckyNumber(num) {
  return new Promise((resolve, reject) => {
    if (typeof num !== 'number' || Number.isNaN(num)) {
      return reject(new Error('Invalid number'));
    }
    if (num <= 0) {
      return reject(new Error('Invalid number'));
    }

    setTimeout(() => {
      if (num % 7 === 0) resolve('Lucky!');
      else resolve('Not Lucky');
    }, 800);
  });
}


checkLuckyNumber(14).then(console.log).catch(console.error); // "Lucky!"
checkLuckyNumber(3).then(console.log).catch(console.error);  // "Not Lucky"
checkLuckyNumber(0).then(console.log).catch(e => console.error(e.message)); // "Invalid number"