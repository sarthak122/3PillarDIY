function fullName() {
  let firstName = "Sameer";
  let lastName = "khanna";
  console.log(`${firstName} ${lastName}`);
}
fullName();

function fullname(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
console.log(fullname("sameer", "khanna"));

function addNumbers(a, b) {
  return a + b;
}
console.log(addNumbers(2, 5));

function areaOfRectangle(length, width) {
  let area = length * width;
  return area;
}
console.log(areaOfRectangle(5, 3));

const perimeterOfRectangle = (length, width) => {
  let perimeter = 2 * (length * width);
  return perimeter;
};
console.log(perimeterOfRectangle(3, 5));

volumeOfRectPrism = (length, width, height) => {
  let volume = length * width * height;
  return volume;
};
console.log(volumeOfRectPrism(2, 3, 4));

AreaOfCircle = (r) => {
  const PI = 3.14;
  let area = PI * r * r;
  return area;
};
console.log(AreaOfCircle(7));

circumOfCircle = (r) => {
  const PI = 3.14;
  return PI * r;
};
console.log(circumOfCircle(6));

density = (mass, volume) => {
  return mass / volume;
};
console.log(density(4, 8));

speed = (TDC, TT) => {
  return TDC / TT;
};
console.log(speed(4, 6));

weight = (mass, gravity) => {
  return mass * gravity;
};
console.log(weight(4, 5));

celsiusToFahrenheit = (celsius) => {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
};
console.log(celsiusToFahrenheit(5));

BMI = (weight, height) => {
  let bmi = weight / (height * height);
  if (bmi < 18.5) {
    return `underweight`;
  } else if (bmi > 18.5 && bmi < 24.9) {
    return `normal weight`;
  } else if (bmi > 25 && bmi < 29.9) {
    return `overweight`;
  } else {
    return `obese`;
  }
};
console.log(BMI(4, 7));

checkSeasons = (month) => {
  switch (month) {
    case "september":
    case "october":
    case "November":
      console.log("the season is Autumn");
      break;
    case "december":
    case "january":
    case "febuary":
      console.log("the season is Winter");
      break;
    case "march":
    case "april":
    case "may":
      console.log("the season is Spring");
      break;
    case "june":
    case "july":
    case "august":
      console.log("the season is Summer");
      break;
    default:
      console.log("invalid Month");
  }
};
checkSeasons("january");

findMax = (x, y, z) => {
  return Math.max(x, y, z);
};
console.log(findMax(5, 7, 4));
