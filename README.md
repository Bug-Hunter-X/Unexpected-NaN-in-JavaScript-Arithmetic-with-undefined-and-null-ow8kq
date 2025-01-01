# Unexpected NaN in JavaScript Arithmetic with undefined and null

This repository demonstrates a common, yet subtle, error in JavaScript related to arithmetic operations involving `undefined` and `null` values.  The loose typing of JavaScript, while flexible, can lead to unexpected `NaN` (Not a Number) results if not carefully handled.

The `bug.js` file showcases the issue, while `bugSolution.js` provides a solution to mitigate the problem.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js` and run the code in a JavaScript environment (e.g., Node.js, browser's developer console).
3. Observe the unexpected `NaN` output for the addition operations involving `undefined`.

## Understanding the Issue

In JavaScript:

*   `undefined` represents the absence of a value.
*   `null` represents the intentional absence of a value.

When performing arithmetic operations (+, -, "/", *) with `undefined`, the result is `NaN` because you cannot perform a mathematical operation on something that doesn't have a numerical value.
When performing arithmetic operations with `null`, Javascript will often implicitly type the `null` to 0 in the operations. Therefore, `null + 1` evaluates to `1` while `null + undefined` will evaluate to `NaN`

## Solution

The `bugSolution.js` file demonstrates how to mitigate this issue by explicitly checking for `undefined` and `null` values before performing the operations. This ensures that the program behaves predictably and avoids the `NaN` problem.