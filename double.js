const add = (a, b) => a + b;
// console.log(process.argv);
const [, , num1, num2] = process.argv;
console.log(add(+num1, +num2));
