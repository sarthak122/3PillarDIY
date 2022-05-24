let shoppingCart = ["milk", "coffee", "tea", "honey"];
shoppingCart.unshift("meat");
shoppingCart.push("sugar");
shoppingCart.splice(shoppingCart.indexOf("honey"), 1);
shoppingCart[shoppingCart.indexOf("tea")] = "green tea";

let countries = ["nigeria", "U.S.A", "italy", "canada", "lebanon"];

if (countries.includes("Ethiopia")) {
  console.log("ETHIOPIA");
} else {
  countries.push("Ethiopia");
}

console.log(countries);

let webTechs = [
  "html",
  "css",
  "javascript",
  "vue",
  "react",
  "mongodb",
  "angular",
];

if (webTechs.includes("Saas")) {
  console.log("Saas is a preprocess");
} else {
  webTechs.push("Saas");
}

console.log(webTechs);

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
console.log(frontEnd.concat(backEnd));
