// let select = document.querySelector("h1");
// let sel = document.querySelectorAll(".hello");

// let app = document.querySelector(".hello");
// console.log(sel);

// let res = document.querySelector(".alrt");
// res.addEventListener("click", function () {
//   alert("hey guys!???");
// });

// let input = document.querySelector(".to-change");
// let inputchange = document.querySelector(".show-change");
// input.addEventListener("keyup", function () {
//   inputchange.innerHTML = input.value;
// });

// let color = document.querySelector(".color");
// let box = document.querySelector(".box");

// color.addEventListener("change", function () {
//   box.style.backgroundColor = color.value; //so here need to be careful where the value is coming from
// });

let button = document.querySelector(".btn-container");

button.addEventListener("click", function (event) {
  alert(event.target.innerText);
  // alert(`the button clicked is ${button}`)
});
