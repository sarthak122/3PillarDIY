var age = prompt('Enter your age');
if(age>=18)
{
    console.log("You are old enough to drive.");
}
else
{
  console.log(`You are left with ${18-age} years to drive.`)
}
let myAge = 20;
var yoursAge = prompt('Enter yours age');
if(myAge > yoursAge)
{
console.log(`I am ${myAge-yoursAge} years older than you.`);
}
else
{
console.log(`you are ${yoursAge-myAge} years older than me.`);
}
let a = 4;
let b = 3;
if(a>b)
{
console.log(`${a} is greater than ${b}`);
}
else
{
console.log(`${a} is less than ${b}`);
}
a > b ? console.log(`${a} is greater than ${b}`) : console.log(`${a} is less than ${b}`);
let num = prompt('Enter a number');
if (num % 2 == 0)
{
  console.log(`${num} is an even number`);
}
else
{
  console.log(`${num} is an odd number`);
}