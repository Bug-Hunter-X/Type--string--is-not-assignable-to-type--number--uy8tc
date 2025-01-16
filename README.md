# Type 'string' is not assignable to type 'number' in TypeScript

This repository demonstrates a common TypeScript error: 'Type 'string' is not assignable to type 'number''.  This error occurs when you try to pass a string value to a function or variable that expects a number.

## The Bug

The `bug.ts` file contains a function `add` that takes two numbers as input and returns their sum. However, the example call passes a string ('10') as the second argument. This mismatch causes the type error.

## The Solution

The `bugSolution.ts` file shows how to fix the error. It demonstrates different approaches: using type assertion, explicit type conversion (e.g., `parseInt()`), or input validation.