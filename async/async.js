// async & await
// clear style of using promise

// 1. async
// Promise Version
function fetchUserPromise() {
    // do network request in 10 secs...
    return new Promise((resolve, reject) => {
        resolve('ellie');
    });
}
const userPromise = fetchUserPromise();
userPromise.then(console.log);

// async version
async function fetchUserAsync() {
    // do network request in 10 secs...
    return 'ellie';
}
const userAsync = fetchUserAsync();
userAsync.then(console.log);

// 2. await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(1000);
    return 'apple';
}

async function getBanana() {
    await delay(1000);
    return 'banana';
}

// Promise
function pickFruitsPromise() {
    return getApple()
    .then(apple => {
        return getBanana().then(banana => `${apple} + ${banana}`);
    });
}
pickFruitsPromise().then(console.log);

// async
async function pickFruitsAsync() {
    // 총 2초 걸리는 코드
    /*
    const apple = await getApple();
    const banana = await getBanana(); 
    */

    // 총 1초 걸리는 코드 ( 코드가 더럽다 )
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise; 

    return `${apple} + ${banana}`;
}
pickFruitsAsync().then(console.log);

// 3. useful Promise APIs
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '));
}
pickAllFruits().then(console.log);

// 먼저 수행되는 애 한개만 사용
function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);