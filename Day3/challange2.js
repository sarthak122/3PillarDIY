var base = prompt('Enter base: ');
var height = prompt('Enter height: ');
var area;
area = 0.5*base*height;
console.log(`The area of the triangle is ${area}`);

var a = prompt('Enter side a: ');
var b = prompt('Enter side b: ');
var c = prompt('Enter side c: ');
var perimeter;
perimeter = (+a)+(+b)+(+c);
console.log(`The perimeter of the triangle is ${perimeter}`);

var length = prompt('Enter the length: ');
var width = prompt('Enter the width: ');
var area
var perimeter;
area=length*width;perimeter=2*((+length)+(+width));
console.log(`The area of the rectangle is ${area}`);
console.log(`The perimeter of the rectangle is ${perimeter}`);

let r = +prompt('Enter the radius: ');
const PI = 3.14;
let area = PI*r*r;
let circumference = 2*PI*r;
console.log(`The area of the circle is ${area}`);
console.log(`The circumference of the circle is ${circumference}`);

var m1;
var y = '2x-2';
m = y.substr(0,1);
var y_intercept = y.substr(2);
var x_intercept = y.substr(0,1)/y.substr(3);
console.log(`The slope = ${m1}`);
console.log(`y-intercept = ${y_intercept}`);
console.log(`x-intercept = ${x_intercept}`);

var m;
var x1=2,y1=2,x2=6,y2=10;
m = (y2-y1)/(x2-x1);
console.log(`The slope between points ${x1},${y1} and ${x2},${y2} is ${m}`);

m1>m?console.log("m1 is greater than m"):
m1<m?console.log("m1 is less than m"):
console.log("both are equal");

var hour = prompt('Enter hours: ' );
var rate = prompt('Enter rate per hour: ');
var pay;
pay = hour*rate;
console.log(`Your weekly earning is ${pay}`);

let myName = 'Saurabh'
myName.length > 7?
console.log(`My name is long`):
console.log(`My name is short`);

let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
firstName.length > lastName.length?
console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`):
console.log(`Your family name, ${lastName} is longer than your first name, ${firstName}`);

let myage = 90;
let yourAge = 25;
myage > yourAge?
console.log(`I am ${myage-yourAge} years older than you.`):
console.log(`I am ${yourage-myAge} years younger than you.`);

var birthYear = prompt('Enter birth year: ');
var obj = new Date();
var currYear = obj.getFullYear();
const MIN_AGE_TO_DRIVE = 18; 
var myAge = currYear-birthYear;
myAge > MIN_AGE_TO_DRIVE ? 
console.log(`You are ${myAge}. You are old enough to drive.`):
console.log(`You are ${myAge}. You will be allowed to drive after ${MIN_AGE_TO_DRIVE-myAge} years.`);

var year = prompt('Enter number of years you live: ');
var  days = year*365;
var hour = days*24;
var min = hour*60;
var sec = min*60;
console.log(`You lived ${sec} seconds`);

var obj = new Date();
var year = obj.getFullYear();
var month =obj.getMonth();
var date  =obj.getDate();
var hour = obj.getHours();
var min = obj.getMinutes();
console.log(`${year}-${month}-${date} ${hour}:${min}`);
console.log(`${date}-${month}-${year} ${hour}:${min}`);
console.log(`${date}/${month}/${year} ${hour}:${min}`);