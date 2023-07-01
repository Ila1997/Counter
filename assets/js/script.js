//COUNT

const counterText = document.querySelector(".display-counter");
let miniDisplay = document.createElement("span");
miniDisplay.classList = "counter-text";
miniDisplay.innerHTML = "0";
counterText.appendChild(miniDisplay);


//FUNCTION

let counterDisplay = document.querySelector(".counter-text");
let buttonPlus = document.querySelector(".plus");
let buttonMinus = document.querySelector(".minus");
let buttonReset = document.querySelector(".reset")
let count = 0;

buttonPlus.addEventListener("click", ()=>{
count++;
updateDisplay();
});

buttonMinus.addEventListener("click", ()=>{
count--;
updateDisplay();
});

buttonReset.addEventListener("click", ()=>{
count = 0;
updateDisplay();
});

function updateDisplay(){
counterDisplay.textContent = count;
}
