const Array = require("./Array.js");

function main() {
  Array.SIZE_RATIO = 3;

  // Create an instance of the Array class
  let arr = new Array();

  // -------------------------------------------------------
  // Assignment #2: Explore the push() method.
  // -------------------------------------------------------
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
  // memory address 3.

  // -------------------------------------------------------
  // Assignment #3: Explore the pop() method.
  // -------------------------------------------------------
  arr.pop();
  arr.pop();
  arr.pop();
  console.log(arr);
  // Question: What is the length, capacity and memory address of your array?
  // Answer: Array { length: 3, _capacity: 12, ptr: 3 }

  // Question: Explain the result of your program after adding
  // the new lines of code.
  // Answer: Length is 3 because we removed 3 items from the array.
  // Capacity is 12 still because we haven't resized yet. As a result,
  // we are still at memory address 3.

  // -------------------------------------------------------
  // Assignment #4: Understanding more about how arrays work.
  // -------------------------------------------------------
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
  // Answer: We never freed up space. As a result, there
  // is no more space for "tahuhida".

  // Question: What is the purpose of the _resize() function
  // in your Array class?
  // Answer: The _resize() function is needed to free up
  // space for new items.
}

main();

// To run this file:
//node main.js
