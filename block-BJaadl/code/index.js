let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
function 

// - Convert the above array "words" into an array of length of word instead of word.
function wordLengths(words) {
  // your code here
}
// - Create a new array that only contains word with atleast one vowel.
let words = [];
function findVowels(words) {
  let result =[];
  for(let word of words) {
  if(words.includes('a') || words.includes('e') || words.includes('i') || words.includes('o') || words.includes('u')){
    return result;
  }
}

// - Find the index of the word "rhythm"

// - Create a new array that contians words not starting with vowel.

// - Create a new array that contianse words not ending with vowel

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
function sumArray(numbers) {
  sum += numbers;
  return sum;
}

// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
let newNumbers = [];
function multiplyByThree(numbers) {
  for(let number of numbers) {
    newNumbers.push(number * 3);
  }
  return newNumbers;
}
// - Create a new array that contains only even numbers
let newNumbers = [];
function evenNumbers(numbers) {
  for(let number of numbers) {
    if(number % 2 === 0) {
      newNumbers.push(number);
    }
  }
  return newNumbers;
}

// - Create  a new array that contains only odd numbers.
let newNumbers = [];
function oddNumbers(numbers) {
  for(let number of numbers) {
    if(number % 2 !== 0) {
      newNumbers.push(number);
    }
  }
  return newNumbers;
}
// - Create a new array that should have true for even number and false for odd numbers.
let newNumbers = [];
function evenOdd(numbers) {
  for(let number of numbers) {
    if(number % 2 === 0) {
      newNumbers.push(true);
    } else {
      newNumbers.push(false);
    }
  }
  return newNumbers;
}
// - Sort the above number in assending order.
let newNumbers = [];  
function sortNumbers(numbers) {
  return numbers.sort((a, b) => a - b);
}
// - Does sort mutate the original array?
Yess
// - Find the sum of the numbers in the array.
sum += numbers;
//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
function aboveNumbers(numbers) {
  let sum = 0;
  for(let number of numbers) {
    sum += number;
  }
  return sum / numbers.length;
}
let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
function averageWordLength(strings) {
  let sum = 0;
  for(let string of strings) {
    sum += string.length;
  }
  return sum / strings.length;
}