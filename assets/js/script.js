const btnBox = document.querySelector(".btn-Box");
const contBox = document.querySelector(".container");
const resetBox = document.querySelector(".reset-box");

//DOM

function creationHandler(tag, style, content) {
  button = document.createElement(tag);
  button.className = style;
  button.innerHTML = content;
  return button;
}


//BUTTONS

const increseBtn = creationHandler("button", "", "+");
const decreseBtn = creationHandler("button", "", "-");
const resetBtn = creationHandler("button", "btn-reset", "RESET");
const textP = creationHandler("p", "", "0");
resetBox.append(resetBtn);
btnBox.append(decreseBtn, textP, increseBtn);


//FUNCTION

let counter = 0;
function target(e) {
  if (e.target === increseBtn) {
    counter++;
  } else if (e.target === decreseBtn) {
    counter--;
  } else {
    counter = 0;
  }
  textP.innerHTML = counter;
}

contBox.addEventListener("click", target);