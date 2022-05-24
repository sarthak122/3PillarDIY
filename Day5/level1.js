let arr = [];
let arr1 = new Array();
arr1 = ["banana","apple","orange","grapes","strawberry","lemon"]
console.log( arr1.length);
console.log(arr1[0]);
console.log(arr1[parseInt(arr1.length / 2)]);
console.log(arr1[arr1.length - 1]);

const mixedDataTypes = [true,4,"samar",{firstName:"Amar",lastName:"Gupta"},[2,5,6],null];
console.log(mixedDataTypes.length);
console.log(mixedDataTypes);

let itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon'];
console.log(itCompanies);
console.log(itCompanies.length);
console.log(itCompanies[0]);
console.log(itCompanies[parseInt(itCompanies.length/2)]);
console.log(itCompanies[itCompanies.length - 1]);
itCompanies.forEach(function (element, index, itCompanies) {
  console.log(element);
});

itCompanies.forEach(function (element, index, itCompanies) {
  itCompanies[index] = element.toUpperCase();
});
console.log(itCompanies);

let txt = "";
itCompanies.forEach(function (element, index, itCompanies) {
  if (index < itCompanies.length - 1) txt += element;
  if (index < itCompanies.length - 2) {
    txt += ", ";
  }
});
txt += ` ${itCompanies[itCompanies.length - 1]} are big IT companies.`;
console.log(txt);

let searchTechComp = prompt("enter company to search");
if (itCompanies.includes(searchTechComp)) {
  console.log(searchTechComp);
} else {
  console.log("company not found");
}

let oo = [];
for (let i = 0; i < itCompanies.length; i++) {
  oo.push(itCompanies[i].includes("oo"));
}

itCompanies.sort();
itCompanies.reverse();
console.log(itCompanies.slice(0, 3));
console.log(itCompanies.slice(-3));
console.log(itCompanies.slice(Math.floor(itCompanies.length / 2)));
itCompanies.shift();
itCompanies.splice(Math.floor(itCompanies.length / 2), 1);
itCompanies.pop();
itCompanies.splice(0);