let firstName = 'Krishna';
let lastName = 'Kumar';
let country = "India";
let city = "Agra";
let age = 20;
let isMarried = false;
console.log(typeof firstName);  //string
console.log(typeof lastName);   //string
console.log(typeof country);    //string
console.log(typeof city);       //string
console.log(typeof age);        //number
console.log(typeof isMarried);  //boolean

console.log(typeof '10' == typeof 10); //false
console.log(parseInt(9.8) == 10); //false

console.log(1=='1'); //true
console.log(1==[1]); //true
console.log([1]=='1');  true

console.log(1==='1');  //false
console.log(1===[1]);  //false
console.log([1]==='1');//false

console.log(4>3); //true
console.log(4>=3); //true
console.log(4<3); //false
console.log(4<=3); //false
console.log(4==4); //true
console.log(4===4); //true
console.log(4!=4); //false
console.log(4!==4); //false
console.log(4!='4'); //false
console.log(4=='4'); //true
console.log(4==='4'); //false
var s1="python";
var s2="jargon";
let l1=s1.length;
let l2=s2.length;
console.log(l1,l2);
console.log(l1!=l2); //false

console.log(4 > 3 && 10 < 12); //true
console.log(4 > 3 && 10 > 12); //false
console.log(4 > 3 || 10 < 12); //true
console.log(4 > 3 || 10 > 12); //true
console.log(!(4 > 3)); //false
console.log(!(4 < 3)); //true
console.log(!(false)); //true
console.log(!(4 > 3 && 10 < 12)); //false
console.log(!(4 > 3 && 10 > 12)); //true
console.log(!(4 === '4')); //true
var s1="python";
var s2="jargon";
console.log(!(s1.includes("on") && s2.includes("on"))); //false

let obj = new Date();
console.log(obj.getFullYear()); //2022
console.log(obj.getMonth()); //3
console.log(obj.getDate()); //30
console.log(obj.getDay()); //6
console.log(obj.getHours()); //14
console.log(obj.getMinutes()); //4
console.log(obj.getTime()); //1651307692908

