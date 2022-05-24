printArr = (arr) => {
  arr.forEach(function (ar) {
    console.log(ar);
  });
};
printArr([3, 4, 5]);

showDateTime = () => {
  let date = new Date();
  let datee = date.getDate();
  let month = date.getUTCMonth();
  let year = date.getFullYear();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  date = date < 10 ? "0" + date : date;
  month = month < 10 ? "0" + (month + 1) : month + 1;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  hour = hour < 10 ? "0" + hour : hour;
  return `${datee}/${month}/${year} ${hour}:${minutes} `;
};
console.log(showDateTime());

swapValues = (a, b) => {
  let temp;
  temp = a;
  a = b;
  b = temp;
  console.log(a, b);
};
let x = 2;
let y = 4;
swapValues(x, y);

reverseArr = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.unshift(arr[i]);
  }
  console.log(newArr);
};
reverseArr([3, 4, 5]);

capitalizeArr = (arr) => {
  let newArr = [];
  arr.forEach(function (ar) {
    newArr.push(ar.toUpperCase());
  });
  return newArr;
};
console.log(capitalizeArr(["john", "mike"]));

additem = (name) => {
  let names = ["john", "mike"];
  names.push(name);
  return names;
};
removeitem = (index) => {
  let names = ["john", "mike"];
  names.splice(index);
  return names;
};

console.log(removeitem(1));
console.log(additem("Dora"));

sumOfNumbers = (...args) => {
  let sum = 0;
  args.forEach(function (arg) {
    sum += arg;
  });
  return sum;
};
console.log(sumOfNumbers(1, 2, 3, 4));

sumOfEven = (...args) => {
  let evenSum = 0;
  args.forEach(function (arg) {
    if (arg % 2 === 0) {
      evenSum += arg;
    }
  });
  return evenSum;
};
console.log(sumOfEven(1, 2, 3, 4));

sumOfOdd = (...args) => {
  let oddSum = 0;
  args.forEach(function (arg) {
    if (arg % 2 != 0) {
      oddSum += arg;
    }
  });
  return oddSum;
};
console.log(sumOfOdd(1, 2, 3, 4));

evenAndOdds = (num) => {
  let odd = 0;
  let even = 0;
  for (let i = 0; i <= num; i++) {
    if (i % 2 === 0) {
      even++;
    } else if (i % 2 !== 0) {
      odd++;
    }
  }
  return `the number of odds are ${odd} \nthe number of even are ${even}`;
};
console.log(evenAndOdds(100));

generateRandomIp = () => {
  let one = Math.floor(Math.random() * 255);
  let two = Math.floor(Math.random() * 255);
  let three = Math.floor(Math.random() * 255);
  let four = Math.floor(Math.random() * 255);
  return `IP: ${one}:${two}:${three}:${four}`;
};
console.log(generateRandomIp());

generateRandomMacAdd = () => {
  let chars = "0123456789ABCDEF";
  let one =
    chars[Math.floor(Math.random() * chars.length)] +
    chars[Math.floor(Math.random() * chars.length)];
  let two =
    chars[Math.floor(Math.random() * chars.length)] +
    chars[Math.floor(Math.random() * chars.length)];
  let three =
    chars[Math.floor(Math.random() * chars.length)] +
    chars[Math.floor(Math.random() * chars.length)];
  let four =
    chars[Math.floor(Math.random() * chars.length)] +
    chars[Math.floor(Math.random() * chars.length)];
  let five =
    chars[Math.floor(Math.random() * chars.length)] +
    chars[Math.floor(Math.random() * chars.length)];
  let six =
    chars[Math.floor(Math.random() * chars.length)] +
    chars[Math.floor(Math.random() * chars.length)];
  return `MAC: ${one}:${two}:${three}:${four}:${five}:${six}`;
};
console.log(generateRandomMacAdd());

generateRandomHex = () => {
  let chars = "0123456789ABCDEF";
  let hex = "";
  for (let i = 0; i <= 6; i++) {
    hex += chars[Math.floor(Math.random() * chars.length)];
  }

  return `#${hex}`;
};
console.log(generateRandomHex());

generateUserId = () => {
  let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
  let userId = "";
  for (let i = 0; i <= 7; i++) {
    userId += chars[Math.floor(Math.random() * chars.length)];
  }
  return userId;
};
console.log(generateUserId());