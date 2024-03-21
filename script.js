const inc = document.querySelector("#Increase");
const dec = document.querySelector("#Decrease");
const res = document.querySelector("#Reset");
const number = document.querySelector("#number");
let count = 0;

inc.onclick = function() {
   count++;
   number.innerHTML = `${count}`;
   if(count > 0) {
      number.style.color = "black";
   }
}

dec.onclick = function() {
   count--;
   number.innerHTML = `${count}`;
   if(count < 0) {
      number.style.color = "red";
   }
}

res.onclick = function() {
   count = 0;
   number.innerHTML = `${count}`;
   number.style.color = "black";
}