let quote = `The quote ' There is no exercise better for the heart than reaching down and lifting people up. ' by Johgn Holmes teaches us to help one another .`;
console.log(quote); //The quote ' There is no exercise better for the heart than reaching down and lifting people up. ' by Johgn Holmes teaches us to help one another .

var txt =
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";
console.log(txt);

console.log(typeof "10" == typeof 10);
console.log(typeof parseInt("10") == typeof 10);

console.log(parseFloat("9.8") == 10);
console.log(Math.ceil(parseFloat("9.8")) == 10);

console.log("python".includes("on") && "jargon".includes("on"));

console.log("I hope this course is not full of jargon".includes("jargon"));
//generate random number between 0 and 100
var a = Math.floor(Math.random() * (100 + 1));
console.log(a);

//generate random number between 50 and 100
//Math.floor(Math.random() * (max - min + 1)) + min
let x = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
console.log(x);
//generate random number between 0 and 255
let y = Math.floor(Math.random() * (255 + 1));
console.log(y);

var s = "JavaScript";
var a = Math.floor(Math.random() * s.length);
console.log(a);
console.log(s.charAt(a));

console.log("1 1 1 1 1\n");
console.log("2 1 2 4 8\n");
console.log("3 1 3 9 27\n");
console.log("4 1 4 16 64\n");
console.log("5 1 5 25 125\n");

var sent =
  "You cannot end a sentence with because because because is a conjunction";
var start = sent.indexOf("because");
console.log(sent.substr(start, "because".length * 3 + 2)); //because because because
