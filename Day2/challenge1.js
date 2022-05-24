var challenge = "30 Days of JavaScript";
console.log(challenge); //30 Days of JavaScript
console.log(challenge.length); //21
console.log(challenge.toUpperCase()); //30 DAYS OF JAVASCRIPT
console.log(challenge.toLowerCase()); //30 days of javascript
console.log(challenge.substr(0, 2)); //30
console.log(challenge.substring(0, 2)); //30
console.log(challenge.substr(3)); //Days of JavaScript
console.log(challenge.includes("Script")); //true
console.log(challenge.split()); //[ '30 Days of JavaScript' ]
console.log(challenge.split(" ")); //[ '30', 'Days', 'of', 'JavaScript' ]
let myString = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(myString.split(","));
// [
//   'Facebook',
//   ' Google',
//   ' Microsoft',
//   ' Apple',
//   ' IBM',
//   ' Oracle',
//   ' Amazon'
// ]
console.log(challenge.replace("JavaScript", "Python")); //30 Days of Python
console.log(challenge.charAt(15)); //S
console.log(challenge.charCodeAt(11)); //74
console.log(challenge.indexOf("a")); //4
console.log(challenge.lastIndexOf("a")); //14
var sent =
  "You cannot end a sentence with because because because is a conjunction";
console.log(sent.indexOf("because")); //31
console.log(sent.lastIndexOf("because")); //47
console.log(sent.search("because")); //31
var sent = " 30 Days Of JavaScript ";
console.log(sent.trim()); //30 Days Of JavaScript
console.log(sent.startsWith(30)); //true
console.log(sent.endsWith("t")); //true
console.log(sent.match(/a/gi)); //[ 'a', 'a', 'a' ]
var sent = "30 Days Of";
console.log(sent.concat(" ", "JavaScript")); //30 Days Of JavaScript
console.log(sent.repeat(2)); //30 Days Of JavaScript30 Days Of JavaScript
