//loop 0-10
//for-loop
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
//while-loop
let j = 0;
while (j <= 10) {
  console.log(j);
  j++;
}
//do-while
let k = 0;
do {
  console.log(k);
  k++;
} while (k <= 10);
//loop 10-0
//for-loop
for (let i = 10; i >= 0; i--) {
  console.log(i);
}
//while-loop
let i = 10;
while (i >= 0) {
  console.log(i);
  i--;
}
//do-while loop
let z = 10;
do {
  console.log(z);
  z--;
} while (z >= 0);

let n = Number(prompt("enter number"));
for (let i = 0; i <= n; i++) {
  console.log(i);
}

let str = "";
for (let i = 0; i < 7; i++) {
  str += "#";
  console.log(str);
}

//multiplication
for (let i = 0; i <= 10; i++) {
  console.log(`${i} x ${i} = ${i * i}`);
}

//power of 2,3
console.log("i\ti^2\ti^3");
for (let i = 0; i <= 10; i++) {
  console.log(`${i}\t${i ** 2}\t${i ** 3}`);
}

//print even numbers from 0-100;
for (i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

//print odd numbers
for (i = 0; i <= 100; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}

//print prime numbers
const lowerNumber = parseInt(prompt("Enter lower number: "));
const higherNumber = parseInt(prompt("Enter higher number: "));

console.log(
  `The prime numbers between ${lowerNumber} and ${higherNumber} are:`
);

// looping from lowerNumber to higherNumber
for (let i = lowerNumber; i <= higherNumber; i++) {
  let flag = 0;

  // looping through 2 to user input number
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      flag = 1;
      break;
    }
  }

  // if number greater than 1 and not divisible by other numbers
  if (i > 1 && flag == 0) {
    console.log(i);
  }
}

//sum of all numbers
let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}`);

//sum of all even and odd
let even = 0;
let odd = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    even += i;
  } else {
    odd += i;
  }
}
console.log(
  `the sum of all evens is ${even}. And the sum of all odds is ${odd}`
);

//storing sum of all even/odd numbers in an array
let sumEvenOdd = [0, 0];
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    sumEvenOdd[0] += i;
  } else if (i % 2 > 0) {
    sumEvenOdd[1] += i;
  }
}
console.log(sumEvenOdd);

//array of five random numbers
let randomArr = [];
for (let i = 0; i < 5; i++) {
  randomArr.push(Math.floor(Math.random() * 10));
}
console.log(randomArr);

//generating random unique arr
let randomUniqueArr = [];
for (let i = 5; randomUniqueArr.length < i; ) {
  let random = Math.floor(Math.random() * 10);
  if (randomUniqueArr.indexOf(random) === -1) {
    randomUniqueArr.push(random);
  }
}
console.log(randomUniqueArr);

//generate 6 random numbers/strings
let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
let randomChars = "";
for (let i = 0; i < 6; i++) {
  let random = Math.floor(Math.random() * chars.length);
  randomChars += chars[random];
}
console.log(randomChars);
