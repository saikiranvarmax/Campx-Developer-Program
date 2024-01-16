//calculator

class Calculator {
    constructor(initialValue) {
        this.result = initialValue;
    }

    add(value) {
        this.result += value;
        return this;
    }

    subtract(value) {
        this.result -= value;
        return this;
    }

    multiply(value) {
        this.result *= value;
        return this;
    }

    divide(value) {
        if (value === 0) {
            throw new Error("Division by zero is not allowed");
        }
        this.result /= value;
        return this;
    }

    power(value) {
        this.result = Math.pow(this.result, value);
        return this;
    }

    getResult() {
        return this.result;
    }
}

// Example usage:
const calculator1 = new Calculator(10);
const result1 = calculator1.add(5).subtract(7).getResult();
console.log(result1); 

const calculator2 = new Calculator(2);
const result2 = calculator2.multiply(5).power(2).getResult();
console.log(result2); 