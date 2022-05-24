const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
let minAge = ages.sort()[0];
let maxAge = ages.sort()[ages.length - 1];
console.log(minAge);
console.log(maxAge);
let medianAge = ages[Math.floor(ages.length / 2)];
console.log(medianAge);
let avgAge;
let totalAge = 0;
for (i = 0; i < ages.length; i++) {
  totalAge += ages[i];
}
avgAge = totalAge / ages.length;
console.log(avgAge);
let range = maxAge - minAge;
console.log(range);
let ma = Math.abs(minAge - avgAge);
let maa = Math.abs(maxAge - avgAge);
console.log(ma);
console.log(maa);

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
];
console.log(countries.slice(0, 10));
console.log(countries[Math.floor(countries.length / 2)]);
let firstHalf = [];
let secondHalf = [];
if (countries.length % 2 == 0) {
  for (var i = 0; i < Math.floor(countries.length / 2); i++) {
    firstHalf.push(countries[i]);
  }
  for (var j = Math.floor(countries.length / 2); j < countries.length; j++) {
    secondHalf.push(countries[j]);
  }
} else {
  countries.push("Nigeria");
}
console.log(countries);
console.log(firstHalf);
console.log(secondHalf);
