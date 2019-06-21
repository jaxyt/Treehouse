const order = true;

const breakfastPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (order) {
            resolve('your order is ready');
        } else {
            reject(Error('oh no, there was a problem'));
        }
    }, 3000)
});

console.log(breakfastPromise);
breakfastPromise
    .then(val => console.log(val))
    .catch(err => console.log(err));