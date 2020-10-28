# Arrays Lab

This lab aims to give you more practice solving problems with arrays.

## Instructions

For each function, make sure you are testing using both: 
* The browser
* The automatic test cases your instructors have provided

> Think of the browser as running _your_ tests, and the test cases as running _our_ tests. 

### Testing using the Browser

To test your code using the browser, open your `index.html` in a new tab. Because your HTML has a `<script>` tag to your JavaScript file, they are linked together. Open the console in your HTML webpage and *invoke* the function to verify it has the expected output. You can ignore the error about `module is not defined` and the error about `Failed to load resource`.

![console](pictures/console.png)

### Testing using Automated Test Cases

Your instructors have written some test cases in the file `answers.text.js`.

From the terminal run `npm install` to install dependencies. You only have to run this command once per repository.

Then run `npm test` to see the results.

![node](pictures/node.png)

## Coding Exercises

1. Write a function that takes in an array of numbers and returns the average value of all the numbers in that array. 

    Example:
    ```javascript
    average([11, 12, 13]); // 12
    average([15, 16, 17, 18, 19, 20]); // 17.5
    average([101, 4, 78]); // 61
    ```

2. Write a function that takes in two arrays and returns a new array with all elements from both arrays.

    Examples:
    ```javascript
    combineArrays(["Ann", true, 4], [1, "Reuben"]); // ["Ann", true, 4, null, "Reuben"]
    combineArrays([4, 5, 6], [1, 2, 3]); // [4, 5, 6, 1, 2, 3]
    ```

3. Write a function that takes in two arrays of numbers and returns the sum across both arrays.

    Examples:
    ```javascript
    arrayPlusArray([1, 2, 3], [4, 5, 6]); // 21
    arrayPlusArray([-1, -2, -3], [-4, -5, -6]; // -21
    arrayPlusArray([0, 0, 0], [4, 5, 6]); // 15
    arrayPlusArray([100, 200, 300], [400, 500, 600]); // 2100
    ```

4. Write a function that takes in a name and returns a initials. The returned string should be two capital letters with a dot separating them. The input will always be two words with one space in between them.

    Examples:
    ```javascript
    abbrevName("Sam Harris"); // "S.H"
    abbrevName("Patrick Feenan"); // "P.F"
    ```

5. Write a function that takes in a sentence and returns a new string where every word starts with a capital letter.

    Example:
    ```javascript
    makeTitle("How can mirrors be real if our eyes aren't real"); // "How Can Mirrors Be Real If Our Eyes Aren't Real"
    makeTitle("most trees are blue"); // "Most Trees Are Blue"
    ```

6. Write a function that when provided an array of three numbers, returns the index of the numerical element that lies between the other two elements.

    Examples:
    ```javascript
    gimme([2, 3, 1]); // 0
    ```
    2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

    ```javascript
    gimme([5, 10, 14]); // 1
    ```
    10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.



## Challenge functions:

There are no automated test cases for the following problems. You will be responsible for testing them yourselves manually, either using the browser or `node`.

1. Write a difference function, which subtracts one array from another and returns the result. The resulting array should have removed all values from the first array, which are present in array which are present in the second array.

    Examples:

    ```javascript
    arrayDiff([1,2],[1]) // [2]
    arrayDiff([1,2,2,2,3],[2]) // [1,3]
    ```


2. Write a function that takes in an array of arrays. If you sort the arrays by their length, you will see, that their length-values are consecutive.
But one array is missing! Return the length of the missing array.

    Examples:

    ```javascript
    findMissingLength( [ [1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9] ] ) // 3
    findMissingLength([ [ 5, 2, 9 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6 ] ] ) // 5
    ```
