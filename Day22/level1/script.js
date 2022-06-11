let body = document.querySelector("body");
let div = document.querySelector("div");
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
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
    let isPrime = true;

    // check if number is greater than 1
    if (i > 1) {
        // looping through 2 to number-1
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                isPrime = false;
                break;
            }
        }
    }
      if (isPrime) {
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
      } 
    }


