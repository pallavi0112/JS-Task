// NOTE -  TASK 1. Write a function that calculates the average of an array of numbers.
// The average (or mean) is the sum of the elements divided by the number of elements. 
// Example: [1, 2, 3] → 2, [10, 20, 30] → 20.

// NOTE -  function to sum the two numbers 
const sumFunction = (a, b) => {
    return a+b;
}

// NOTE -  function to calculate the average
const meanFunction = (sum , length) => {
    return sum / length;
}

// NOTE - function to check each element of array is a positive number
const checkPositiveNumbers = (arr, length) => {
    for(let i = 0; i < length; i++) {
        if(!Number.isInteger(arr[i]) || arr[i] < 0) {
            return false;
        }
    }
    return true;
}
const calculatesAverageFunction = (arr) => {
    // NOTE - check if provided argument is an array or not.
    if(!Array.isArray(arr)){
        return "Error: Input is not an array.";
    }
    const length = arr.length;
    // NOTE - check if array is empty throw error.
    if(!length){
        return "Error: Array cannot be empty.";
    }
    // NOTE - check if array contains non-numeric values throw error.
    if(!checkPositiveNumbers(arr,length)){
        return "Error: Array contains non-numeric or negative values.";
    }
    let sum =  0;
    for (let i = 0; i < length; i++) {
        sum  =  sumFunction(sum, arr[i])
    }
    const average = meanFunction(sum, length);
    return average;
}

console.log(calculatesAverageFunction({}));  // Output: Error: Input is not an array.
console.log(calculatesAverageFunction([]));  // Output: Error: Array cannot be empty.
console.log(calculatesAverageFunction([1, 2, 3]));  // Output: 2
console.log(calculatesAverageFunction([1, 'a', 3])); // Output: Error: Array contains non-numeric or negative values.
console.log(calculatesAverageFunction([1, -2, 3]));  // Output: Error: Array contains non-numeric or negative values.
console.log(calculatesAverageFunction([10, 20, 30])); // Output: 20



// NOTE  - TASK 2. Write a function that calculates the sum of the first n natural numbers.
// Natural numbers are the sequence of positive integers starting from 1. The sum of the first n natural numbers is given by Sum = n*(n+1)/2.
// Example: Sum of 1 to 5 is 15, Sum of 1 to 3 is 6.

const calculateSumOfPositiveIntegers = (num) => {
    //NOTE -  Check if the input is a positive integer
    if (!Number.isInteger(num) || num <= 0) {
        return "Error: Input must be a positive integer.";
    }
    //NOTE - Sum = n * (n + 1) / 2
    return (num * (num + 1)) / 2;
};

console.log(calculateSumOfPositiveIntegers(5)); // Output: 15
console.log(calculateSumOfPositiveIntegers(3)); // Output: 6
console.log(calculateSumOfPositiveIntegers(-1)); // Output: "Error: Input must be a positive integer."
console.log(calculateSumOfPositiveIntegers(0)); // Output: "Error: Input must be a positive integer."
console.log(calculateSumOfPositiveIntegers(10)); // Output: 55
console.log(calculateSumOfPositiveIntegers(1)); // Output: 1