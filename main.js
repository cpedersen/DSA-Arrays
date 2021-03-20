const Array = require("./Array.js");

function main() {
  Array.SIZE_RATIO = 3;

  // Create an instance of the Array class
  let arr = new Array();

  // -------------------------------------------------------
  // Assignment #2: Explore the push() method.
  // -------------------------------------------------------
  console.log("-------------------- Assignment #2 --------------------");
  // Add an item to the array
  arr.push(3);
  console.log(arr);
  // Question: What is the length, capacity and memory address of your array?
  // Answer: Array { length: 1, _capacity: 3, ptr: 0 }

  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);
  console.log(arr);
  // Question: What is the length, capacity and memory address of your array?
  // Answer: Array { length: 6, _capacity: 12, ptr: 3 }
  // this.length (3) + 1 = 4; 4 * size ratio 3 = 12

  // Question: Explain the result of your program after adding the new
  // lines of code.
  // Answer: 6 values were pushed into the array which resulted
  // in an increased length of 6. We reallocated the capacity from
  // 3 boxes to 12 boxes of memory using the equation above.
  // When we resized, we moved our array, using the length of 3, to
  // memory address 3. We freed up the old memory block from 0 to
  // 2 and created a new memory block with a capacity of 12 from
  // memory addresses 3 to 14.

  // -------------------------------------------------------
  // Assignment #3: Explore the pop() method.
  // -------------------------------------------------------
  console.log("-------------------- Assignment #3 --------------------");
  arr.pop();
  arr.pop();
  arr.pop();
  console.log(arr);
  // Question: What is the length, capacity and memory address of your array?
  // Answer: Array { length: 3, _capacity: 12, ptr: 3 }

  // Question: Explain the result of your program after adding
  // the new lines of code.
  // Answer: Length is 3 because we removed 3 items from the array.
  // Capacity is 12 still because we haven't resized yet. We don't
  // do this with removals. As a result, we are still at memory
  // address 3.

  // -------------------------------------------------------
  // Assignment #4: Understanding more about how arrays work.
  // -------------------------------------------------------
  console.log("-------------------- Assignment #4 --------------------");
  // Print the 1st item in the array arr.
  console.log(arr.get(0));
  // Answer: 3

  // Empty the array and add just 1 item: arr.push("tauhida");
  arr.pop();
  arr.pop();
  arr.pop();
  console.log(arr);
  // Answer: Array { length: 0, _capacity: 12, ptr: 3 }

  arr.push("tauhida");
  // Print this 1 item that you just added.
  console.log(arr.get(0));
  // Question: What is the result?
  // Answer: NaN

  // Question: Can you explain your result?
  // Answer: Memory is set using Float64Array, which is an
  // array of 64-bit floating point numbers. We can only
  // push numbers.

  // Question: What is the purpose of the _resize() function
  // in your Array class?
  // Answer: The _resize() function is needed to free up
  // space for new items.

  // -------------------------------------------------------
  // Assignment #5: URLify a string.
  // -------------------------------------------------------
  // Write a method that takes in a string and replaces all
  // its empty spaces with a %20. Your algorithm can only make
  // 1 pass through the string.
  console.log("-------------------- Assignment #5 --------------------");
  const input1 = "tauhida parveen";
  const input2 = "www.thinkful.com /tauh ida parv een";
  console.log("Input: ", input1);
  console.log(arr.URLify(input1));
  console.log("Input: ", input2);
  console.log(arr.URLify(input2));

  // -------------------------------------------------------
  // Assignment #6: Filtering an array.
  // -------------------------------------------------------
  // Imagine you have an array of numbers. Write an algorithm to remove
  // all numbers less than 5 from the array. DO NOT use Array's built-in
  // .filter() method here; write the algorithm from scratch.
  console.log("-------------------- Assignment #6 --------------------");
  const testArray = [0, 1, 2, 3, 4, 5, 6, 20, 30, 50, 60];
  console.log("Input: ", testArray);
  console.log(arr.filterArray(testArray));

  // -------------------------------------------------------
  // Assignment #7: Max sum in the array
  // -------------------------------------------------------
  // You are given an array containing positive and negative integers.
  // Write an algorithm which will find the largest sum in a continuous
  // sequence.
  console.log("-------------------- Assignment #7 --------------------");
  const input = [4, 6, -3, 5, -2, 1];
  console.log("Input: ", input);
  console.log(arr.maxSum(input));

  // -------------------------------------------------------
  // Assignment #8: Merge arrays
  // -------------------------------------------------------
  console.log("-------------------- Assignment #8 --------------------");

  // -------------------------------------------------------
  // Assignment #9: Remove characters
  // -------------------------------------------------------
  console.log("-------------------- Assignment #9 --------------------");

  // -------------------------------------------------------
  // Assignment #10: Products
  // -------------------------------------------------------
  console.log("-------------------- Assignment #10 --------------------");

  // -------------------------------------------------------
  // Assignment #11: 2D array
  // -------------------------------------------------------
  console.log("-------------------- Assignment #11 --------------------");

  // -------------------------------------------------------
  // Assignment #12: String Rotation
  // -------------------------------------------------------
  console.log("-------------------- Assignment #12 --------------------");
}

main();

// To run this file:
//node main.js
