function add(a: number, b: number): number {
  return a + b;
}

const num1 = 5;
const num2 = parseInt('10', 10); // Convert string to number

const result = add(num1, num2); // Now it works without error.
console.log(result); // Output: 15

//Alternative solution using type assertion
const result2 = add(num1, <number>('10')) //This is not advised unless absolutely sure of the type
console.log(result2) //Output: 15
// Note: Using type assertions can be risky if the value is not actually a number. It's generally better to use explicit type conversion or input validation.