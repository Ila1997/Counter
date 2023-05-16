
// DISPLAY AND BUTTONS

const counter = document.getElementById("counter-content");
let plus = document.createElement("div");
plus.classList = ["col-4 btn button inc"];
counter.appendChild(plus);

let display = document.createElement("div");
display.classList = ["col-4 display-counter"];
counter.appendChild(display);

let minus = document.createElement("div");
minus.classList = ["col-4 btn button dec"];
counter.appendChild(minus);


//ICONS

const inc = document.querySelector(".inc");
let iconPlus = document.createElement("i");
iconPlus.classList = ["bi bi-plus-lg icon plus"];
inc.appendChild(iconPlus);

const dec = document.querySelector(".dec")
let iconMinus = document.createElement("i");
iconMinus.classList = ["bi bi-dash-lg icon minus"]
dec.appendChild(iconMinus)


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
