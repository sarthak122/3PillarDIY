let body = document.querySelector("body");
let div = document.querySelector("div");
function isPrime(num) {
  var prime;
  for (var i = 2; i <= num; i++) {
    prime = 1;
    for (var j = 2; j <= i / 2; j++) {
      if (i % j == 0) {
        prime = 0;
        break;
      }
    }
  }
  return prime;
}
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    if (isPrime(i) === 1) {
      let box = document.createElement("div");
      box.textContent = i;
      box.style.width = "130px";
      box.style.height = "100px";
      box.style.backgroundColor = "red";
      box.style.margin = "8px";
      box.style.paddingTop = "40px";
      box.style.fontSize = "30px";
      box.style.color = "white";
      div.appendChild(box);
    } else {
      let box = document.createElement("div");
      box.textContent = i;
      box.style.width = "130px";
      box.style.height = "100px";
      box.style.backgroundColor = "green";
      box.style.margin = "8px";
      box.style.paddingTop = "40px";
      box.style.fontSize = "30px";
      box.style.color = "white";
      div.appendChild(box);
    }
  } else {
    if (isPrime(i) === 1) {
      let box = document.createElement("div");
      box.textContent = i;
      box.style.width = "130px";
      box.style.height = "100px";
      box.style.backgroundColor = "red";
      box.style.margin = "8px";
      box.style.paddingTop = "40px";
      box.style.fontSize = "30px";
      box.style.color = "white";
      div.appendChild(box);
    } else {
      let box = document.createElement("div");
      box.textContent = i;
      box.style.width = "130px";
      box.style.height = "100px";
      box.style.backgroundColor = "yellow";
      box.style.margin = "8px";
      box.style.paddingTop = "40px";
      box.style.fontSize = "30px";
      box.style.color = "white";
      div.appendChild(box);
    }
  }
}
