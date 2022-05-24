const countries = [
  "Albania",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
];
const copyArray = [];
for (const items of countries) {
  copyArray.push(items);
}

let sortedCountries = copyArray.sort();
console.log(sortedCountries);
console.log(countries);
console.log(copyArray);

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const mernStack = ["MongoDB", "Express", "React", "Node"];
console.log(webTechs.sort());
console.log(mernStack.sort());

const newArray = Array();
for (const elements in countries) {
  if (countries[elements].includes("land")) {
    newArray.push(countries[elements]);
  }
}
console.log(newArray);

let max = 0;
let maxCharCountry;
for (const elements in countries) {
  if (countries[elements].length > max) {
    max = countries[elements].length;
    maxCharCountry = countries[elements];
  }
}
console.log(maxCharCountry);

const newArray1 = Array();
for (const element of countries) {
  if (element.length == 4) {
    newArray1.push(element);
  }
}
console.log(newArray1);

const newArray2 = Array();
for (const element of countries) {
  if (element.length == 2 || element.length > 2) {
    newArray2.push(element);
  }
}
console.log(newArray2);

const newArray3 = Array();
countries.reverse();
for (var i = 0; i < countries.length; i++) {
  newArray3.push(countries[i].toUpperCase());
}
console.log(newArray3);
