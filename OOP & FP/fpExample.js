//compose
const compose = (a,b) => (data) => a(b(data));

const multiplyBy5 = (number) => 5*number;

const makePositive = (num) => Math.abs(num);

const multiplyBy5AndAbsoulate = compose(multiplyBy5, makePositive);

multiplyBy5AndAbsoulate(-32);