const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}
let maxSkills=0;
let personWithMaxSkills;
for (const property in users)
{
  if(users[property].skills.length>maxSkills)
  {
    maxSkills = users[property].skills.length;
    personWithMaxSkills = property;
  }
}
console.log(personWithMaxSkills);

let countLoggedIn =0;
let countPointGreaterThanFifty =0;
for(const property in users)
{
  if(users[property].isLoggedIn===true)
  {
    countLoggedIn+=1;
  }
  if(users[property].points>=50)
  {
    countPointGreaterThanFifty+=1;
  }
}
console.log(countLoggedIn);
console.log(countPointGreaterThanFifty);

var usersWithMERN = [];

for(const property in users)
{
  let skills = users[property].skills;
  if(skills.includes('MongoDB') && skills.includes('Express') && skills.includes('React') && skills.includes('Node'))
  {
    usersWithMERN.push(property);
  }
  
}
console.log(usersWithMERN);

const newUser = Object.assign({},users);
newUser.Sarthak = {
  email: 'sarthak@sarthak.com',
  skills: ['HTML','CSS','JavaScript','Java'],
  age: 20,
  isLoggedIn: false,
  points: 30
}
console.log(newUser);

const keys = Object.keys(users);
console.log(keys);

const values = Object.values(users);
console.log(values);

let country = {
    name: "Nigeria",
    capital: "?",
    population: "7 billion",
    languages: ["hausa", "igbo", "yoruba"]
}

console.log(`${country.name}\n${country.capital}\n${country.population}\n${country.languages}`)
