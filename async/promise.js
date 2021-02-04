'use strict';

// Promise is a Javascript objeqct for asynchronous operation.
// state: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, then executor runs automatically.
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    console.log('doing something...');
    setTimeout( () => {
        resolve('ellie');
        // reject(new Error('no network'));
    }, 2000);
});

// 2. Consumers: then, catch, finally
promise
.then((value) => {
    console.log(value);
})
.catch(error => {
    console.log(error);
})
.finally( () => {
    console.log('finally');
});

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 1000);
});

fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout( () => resolve(num - 1), 1000);
    })
})
.then(console.log);

// 4. Error Handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('hen'), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        // setTimeout(() => resolve(`${hen} => egg`), 1000);
        setTimeout(() => reject(new Error(`${hen} => egg`)), 1000);
    });
const cook = egg => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => cook`), 1000);
    });

getHen()
.then(getEgg)
.catch(error => {
    return 'bread';
})
.then(cook)
.then(console.log)
.catch(console.log);