class Counter {
    constructor(runEveryFiveTimes) {
        this.counter = 0;
        this.callback = runEveryFiveTimes;
    }

    increase(runIf5Times) {
        this.counter++;
        console.log(this.counter);
        if (this.counter % 5 === 0) {
            this.callback && this.callback(this.counter);
        }
    }
}
function printSomething(num) {
    console.log(`yo! ${num}`);
}
function alertSomething(num) {
    alert(`yo! ${num}`);
}
const printCounter = new Counter(printSomething);
const alterCounter = new Counter(alertSomething);

printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();