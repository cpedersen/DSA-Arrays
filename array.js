// -------------------------------------------------------
// Assignment #1: Create this Array class to learn how
// memory allocation works.
// -------------------------------------------------------

const Memory = require("./memory.js");
const memory = new Memory();

class Array {
  constructor() {
    this.length = 0;
    this._capacity = 0;
    this.ptr = memory.allocate(this.length);
  }

  push(value) {
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }
    memory.set(this.ptr + this.length, value);
    this.length++;
  }

  get(index) {
    if (index < 0 || index > this.length) {
      throw new Error("Index error");
    }
    return memory.get(this.ptr + index);
  }

  pop() {
    if (this.length == 0) {
      throw new Error("Index error");
    }
    const value = memory.get(this.ptr + this.length - 1);
    this.length--;
    return value;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      throw new Error("Index error");
    }
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    memory.set(this.ptr + index, value);
    this.length++;
  }

  remove(index) {
    if (index < 0 || index > this.length) {
      throw new Error("Index error");
    }
    memory.copy(
      this.ptr + index,
      this.ptr + index + 1,
      this.length - index - 1
    );
    this.length--;
  }

  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = memory.allocate(size);
    if (this.ptr === null) {
      throw new Error("Out of memory");
    }
    memory.copy(this.ptr, oldPtr, this.length);
    memory.free(oldPtr);
    this._capacity = size;
  }

  URLify(string) {
    if (typeof string !== "string") {
      throw new Error("Not a string");
    }
    let newString = "";
    for (let i = 0; i < string.length; i++) {
      if (string[i] === " ") {
        newString += "%20";
      } else {
        newString += string[i];
      }
    }
    return newString;
  }

  filterArray(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= 5) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }

  maxSum(arr) {
    let currentSum = 0;
    let maxSum = 0;
    for (let i = 0; i < arr.length; i++) {
      currentSum = arr[i];
      for (let j = i + 1; j < arr.length; j++) {
        currentSum += arr[j];
        if (currentSum > maxSum) {
          maxSum = currentSum;
        }
      }
    }
    return maxSum;
  }

  mergeArrays(arr1, arr2) {
    let newArray = [...arr1];
    arr2.map((item) => {
      let i = 0;
      while (i < newArray.length) {
        if (item <= newArray[i]) {
          newArray.splice(i, 0, item);
          break;
        }
        i++;
      }
    });
    return newArray;
  }

  removeChars(string, chars) {
    let newString = "";
    for (let i = 0; i < string.length; i++) {
      let match = false;
      for (let j = 0; j < chars.length; j++) {
        if (string[i] === chars[j]) {
          match = true;
        }
      }
      if (!match) {
        newString += string[i];
      }
    }
    return newString;
  }

  products(arr) {
    let productArray = [];
    for (let i = 0; i < arr.length; i++) {
      let res = 1;
      for (let j = 0; j < arr.length; j++) {
        if (i != j) {
          res *= arr[j];
        }
      }
      productArray.push(res);
    }
    return productArray;
  }

  search2DArr(arr) {
    const originalArray = JSON.parse(JSON.stringify(arr));
    let newArray = arr;
    originalArray.map((row, rowIndex) => {
      row.map((col, colIndex) => {
        if (col === 0) {
          newArray[rowIndex].forEach((num, i) => (newArray[rowIndex][i] = 0));
          newArray.forEach((newRow) => (newRow[colIndex] = 0));
        }
      });
    });
    return newArray;
  }

  stringRotate(str1, str2) {
    let combineString = str1 + str1;
    if (str1.length != str2.length) return false;
    if (combineString.indexOf(str2) === -1) {
      return false;
    }
    return true;
  }
}

Array.SIZE_RATIO = 3;

module.exports = Array;
