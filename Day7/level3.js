userIdGeneratedByUser = () => {
  let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
  let noId = Number(prompt("how many id do you want to generate"));
  let noChars = Number(prompt("in how many chars"));
  let ids = [];
  for (i = 0; i < noId; i++) {
    ids[i] = "";
    for (k = 0; k < noChars; k++) {
      ids[i] += chars[Math.floor(Math.random() * chars.length)];
    }
  }
  console.log(ids);
  ids.forEach(function (id) {
    console.log(id);
  });
};
userIdGeneratedByUser();

rgbColorGnerator = () => {
  let one = Math.floor(Math.random() * 255);
  let two = Math.floor(Math.random() * 255);
  let three = Math.floor(Math.random() * 255);
  return `rgb(${one},${two},${three})`;
};
console.log(rgbColorGnerator());

arrayOfHexaColors = () => {
  let chars = "0123456789ABCDEF";
  let hex = [];
  for (let k = 0; k < 3; k++) {
    hex[k] = "#";
    for (let i = 0; i < 6; i++) {
      hex[k] += chars[Math.floor(Math.random() * chars.length)];
    }
  }

  return hex;
};
console.log(arrayOfHexaColors());
//Array of RGB colors
arrayOfRgbColors = () => {
  let rgb = [];
  for (let k = 0; k < 3; k++) {
    let one = Math.floor(Math.random() * 255);
    let two = Math.floor(Math.random() * 255);
    let three = Math.floor(Math.random() * 255);
    rgb[k] = `rgb(${one},${two},${three})`;
  }

  return rgb;
};
console.log(arrayOfRgbColors());

function ColorToHex(color) {
  var hexadecimal = color.toString(16);
  console.log(hexadecimal);
  return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
}

function ConvertRGBtoHex(red, green, blue) {
  return "#" + ColorToHex(red) + ColorToHex(green) + ColorToHex(blue);
}
console.log(ConvertRGBtoHex(252, 100, 200));

function ConvertHextoRGB(hex) {
  var red = parseInt(hex[1] + hex[2], 16);
  var green = parseInt(hex[3] + hex[4], 16);
  var blue = parseInt(hex[5] + hex[6], 16);
  return `(${red},${green},${blue})`;
}
console.log(ConvertHextoRGB("#ff64c8"));

generateColors = (type, arrLength) => {
  let chars = "0123456789ABCDEF";
  let colors = [];
  if (type === "rgb") {
    for (i = 0; i < arrLength; i++) {
      colors[i] = "rgb";
      colors[i] += `(${Math.floor(Math.random() * 255)},`;
      colors[i] += `${Math.floor(Math.random() * 255)},`;
      colors[i] += `${Math.floor(Math.random() * 255)},)`;
    }
  } else if (type === "hex") {
    for (let i = 0; i < arrLength; i++) {
      colors[i] = "#";
      for (k = 0; k < 6; k++) {
        colors[i] += chars[Math.floor(Math.random() * chars.length)];
      }
    }
  }
  return colors;
};
console.log(generateColors("rgb", 3));

function shuffleArray(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

// Used like so
var arr = [2, 11, 37, 42];
shuffleArray(arr);
console.log(arr);

factorial = (num) => {
  let factorial = 1;
  for (let i = num; i > 0; i--) {
    factorial *= i;
  }
  return factorial;
};
console.log(factorial(5));

isEmpty = (val) => {
  if (val === undefined) {
    return `it's empty`;
  } else {
    return `not empty`;
  }
};
console.log(isEmpty(4));

sum = (...args) => {
  let sum = 0;
  args.forEach(function (arg) {
    sum += arg;
  });
  return sum;
};
console.log(sum(1, 2, 3, 4));

sumOfArrayItems = (arr) => {
  let sum = 0;
  arr.forEach(function (ar) {
    if (typeof ar === "number") {
      sum += ar;
    } else {
      sum = `it's a string`;
    }
  });
  return sum;
};
console.log(sumOfArrayItems([1, 2, 3]));

average = (arr) => {
  let sum = 0;
  arr.forEach(function (ar) {
    if (typeof ar === "number") {
      sum += ar;
    } else {
      sum = `it's a string`;
    }
  });
  return sum/arr.length;
};
console.log(average([1, 2, 3]));

modifyArray = (arr) => {
  if (arr.length >= 6) {
    for (let i = 0; i < arr.length; i++) {
      if ((i = 4)) {
        arr[i] = arr[i].toUpperCase();
      }
    }
    return arr;
  } else {
    return `item not found`;
  }
};
console.log(
  modifyArray(["Avocado", "Tomato", "Potato", "Mango", "Lemon", "Carrot"])
);

//check if a number is prime or not
function isPrime(n) {
  if (n <= 1) return false;

  for (let i = 2; i < n; i++) if (n % i == 0) return false;

  return true;
}
console.log(isPrime(103));
console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(5));
console.log(isPrime(100));

//check whether the array is unique or not
const uniqueArray = (array) => {
  const newArray = Array();
  for (const item of array) {
    if (!newArray.includes(item)) {
      newArray.push(item);
    }
  }
  return newArray.length == array.length ? true : false;
};
console.log(uniqueArray(["ram", "sita", 1, 2]));
console.log(uniqueArray([1, 2, 1, 1]));
console.log(uniqueArray([1, 1, 1, 1]));


//check if all items of same data type
const checkDataType = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    if (typeof array[i] == typeof array[i + 1]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};
console.log(checkDataType(["ram", "sita"]));

//check if a variable name is valid or not
function isValid(str, n) {
  if (
    !(
      (str[0] >= "a" && str[0] <= "z") ||
      (str[0] >= "A" && str[0] <= "Z") ||
      str[0] == "_" ||
      str[0] == "$"
    )
  )
    return false;

  for (let i = 1; i < str.length; i++) {
    if (
      !(
        (str[i] >= "a" && str[i] <= "z") ||
        (str[i] >= "A" && str[i] <= "Z") ||
        (str[i] >= "0" && str[i] <= "9") ||
        str[i] == "_" ||
        str[i] == "$"
      )
    )
      return false;
  }

  return true;
}
let str = "1sam";
console.log(isValid(str, str.length));
let str1 = "sa1_m$a";
console.log(isValid(str1, str1.length));

//generate seven random numbers array from 0-9
let randomUniqueArr = [];
function randomUniqueArray() {
  for (let i = 7; randomUniqueArr.length < i; ) {
    let random = Math.floor(Math.random() * 10);
    if (randomUniqueArr.indexOf(random) === -1) {
      randomUniqueArr.push(random);
    }
  }
  return randomUniqueArr;
}

console.log(randomUniqueArray());


//Reverse countries Array
let countries = ["nigeria", "U.S.A", "italy", "canada", "lebanon"];
const reverseCountries = (countries) => {
  let copyCountries = [];
  for (const item of countries) {
    copyCountries.unshift(item);
  }
  return copyCountries;
};
console.log(reverseCountries(countries));