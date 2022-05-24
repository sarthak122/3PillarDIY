//generate any number of numbers/strings
let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
let r = Math.floor(Math.random() * chars.length);
let randChars = "";
for (let i = 0; i < r; i++) {
  let random = Math.floor(Math.random() * chars.length);
  randChars += chars[random];
}
console.log(randChars);

//generate hexadecimal values
let characters = "0123456789ABCDEF";
let a="#"
for (let i = 0; i < 6; i++) {
  let random = Math.floor(Math.random() * characters.length);
  a += characters[random];
}
console.log(a);

//generate rgb colours
let red = Math.floor(Math.random() * 256);
let green = Math.floor(Math.random() * 256);
let blue = Math.floor(Math.random() * 256);
var color = `rgb(${red}, ${green}, ${blue})`;
console.log(color);

//creating new array of countries
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
const newArray = [];
for (const items of countries) {
  newArray.push(items.toUpperCase());
}
console.log(newArray);

//creating length array of the above countries
const newArr = [];
for (const items of countries) {
  newArr.push(items.length);
}
console.log(newArr);

//creating arrays of array
let newCountries = [];
for (let i = 0; i < countries.length; i++) {
  newCountries.push([
    countries[i],
    countries[i].slice(0, 3),
    countries[i].length,
  ]);
}
console.log(newCountries);

let countWithoutLand = [];
let countWithLand = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].includes("land")) {
    countWithLand.push(countries[i]);
  } else {
    countWithoutLand.push(countries[i]);
  }
}
console.log(countWithLand);

let countWithIa = [];
let countWithoutIa = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].includes("ia")) {
    countWithIa.push(countries[i]);
  } else {
    countWithoutIa.push(countries[i]);
  }
}
console.log(countWithIa);

let countriesCharLength = [];
for (let i = 0; i < countries.length; i++) {
  countriesCharLength.push(countries[i].length);
}
let highestNum;
highestNum = Math.max(...countriesCharLength);
console.log(countries[countriesCharLength.indexOf(highestNum)]);

//countries with five chars
let countriesWithFiveChars = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].length === 5) {
    countriesWithFiveChars.push(countries[i]);
  }
}
console.log(countriesWithFiveChars);

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
let webTechsLength = [];
for (let i = 0; i < webTechs.length; i++) {
  webTechsLength.push(webTechs[i].length);
}
let highestChar;
highestChar = Math.max(...webTechsLength);
console.log(webTechs[webTechsLength.indexOf(highestChar)]);

let newWebTechs = [];
for (let i = 0; i < webTechs.length; i++) {
  newWebTechs.push([webTechs[i], webTechs[i].length]);
}
console.log(newWebTechs);

const mernStack = ["MongoDB", "Express", "React", "Node"];
let mern = "";
for (let i = 0; i < mernStack.length; i++) {
  mern += mernStack[i].slice(0, 1);
}
console.log(mern);

let techs = [
  "HTML",
  "CSS",
  "JS",
  "React",
  "Redux",
  "Node",
  "Express",
  "MongoDB",
];
for (let i = 0; i < techs.length; i++) {
  console.log(techs[i]);
}
for (let tech of techs) {
  console.log(tech);
}
let fruits = ["banana", "orange", "mango", "lemon"];
let newFruits=[]
for (let i = fruits.length - 1; i >= 0; i--) {
    newFruits.push(fruits[i]);
}
console.log(newFruits);

const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];
for (const items of fullStack) {
  for (const item of items) {
    console.log(item);
  }
}