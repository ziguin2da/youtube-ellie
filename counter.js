class Counter {
    constructor() {
        this.counter = 0;
    }

    increase(runIf5Times) {
        this.counter++;
        console.log(this.counter);
        if (this.counter % 5 === 0) {
            runIf5Times();
        }
    }
}

const coolCounter = new Counter();
function printSomething() {
    console.log('yo');
}
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);