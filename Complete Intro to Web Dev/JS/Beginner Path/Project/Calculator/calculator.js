function add(a) {
  currVal += a;
  currOpr = null;
  return currVal;
}
function multiply(a) {
  currVal *= a;
  currOpr = null;
  return currVal;
}
function divide(a) {
  currVal /= a;
  currOpr = null;
  return currVal;
}
function subtract(a) {
  currVal -= a;
  currOpr = null;
  return currVal;
}

//variables
let input = "";
let str = "0";
let currVal = 0;
let currOpr = "";

//calculation function
function calc(e) {
  let display = document.querySelector(".input");

  input = e.target.value;

  let opr;

  //if it is not a number
  if (isNaN(+input)) {
    opr = input;
    switch (opr) {
      case "clear":
        remove();
        break;
      case "back":
        str = str.slice(0, str.length - 1);
        if (str == "") {
          display.innerHTML = "0";
        } else {
          display.innerHTML = str;
        }
        break;
      case "/":
        currOpr = "/";
        currVal = +str;
        remove();
        break;
      case "x":
        currOpr = "x";
        currVal = +str;
        remove();
        break;
      case "-":
        currOpr = "-";
        currVal = +str;
        remove();
        break;
      case "+":
        currOpr = "+";
        currVal = +str;
        remove();
        break;
      case "=":
        if (currOpr === null) return;
        switch (currOpr) {
          case "+":
            res = add(+str);
            display.innerHTML = res;
            break;
          case "-":
            res = subtract(+str);
            display.innerHTML = res;
            break;
          case "x":
            res = multiply(+str);
            display.innerHTML = res;
            break;
          case "/":
            res = divide(+str);
            display.innerHTML = res;
            break;
          default:
            currOpr = null;
            break;
        }
        str = res.toString();
        break;
    }
  }
  //if it is number
  else {
    if (str === "0") {
      str = input;
    } else {
      str += input;
    }
    display.innerHTML = str;
  }
  //reseting function
  function remove() {
    display.innerHTML = "0";
    str = "0";
  }
}
