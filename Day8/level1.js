const dog = {};
console.log(dog);
dog.name = 'rocky';
dog.legs = 4;
dog.color = 'black';
dog.age = 3;
dog.bark = function(){
  return 'woof woof';
}
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark());
dog.breed = "german shepherd";
dog.getDogInfo = function(){
  return Object.values(this);
}
console.log(dog.getDogInfo());