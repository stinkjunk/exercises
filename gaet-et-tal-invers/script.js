"use strict";

const inputNum = document.querySelector("#inputnum");
const compAnsw = document.querySelector("#compGuess");
const lowBtn = document.querySelector("#toolow");
const highBtn = document.querySelector("#toohigh");
const guessBtn = document.querySelector("#guessComputer");
let guessRange = { lowest: 0, highest: 100 };
let lastGuess;

guessBtn.addEventListener("click", computerGuess);

document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    computerGuess();
    event.preventDefault();
  }
});

function computerGuess() {
  console.log("Computer gætter...");
  let compGuess =
    Math.floor(Math.random() * (guessRange.highest - guessRange.lowest + 1)) +
    guessRange.lowest; // tilfældigt tal mellem laveste og højeste
  if (compGuess === Number(inputNum.value)) {
    compAnsw.innerHTML = `Computer gættede rigtigt! Det var ${compGuess} = ${inputNum.value}`;
    compAnsw.classList = "green";
  } else {
    compAnsw.innerHTML = `Computer gættede forkert! Det var ${compGuess}, != ${inputNum.value}`;
    compAnsw.classList = "red";
  }

  console.log(
    compGuess + " gættet mellem ",
    guessRange.lowest,
    " og ",
    guessRange.highest
  );
  return (lastGuess = compGuess);
}

highBtn.addEventListener("click", () => {
  console.log("For højt!");
  guessRange.highest = lastGuess - 1; //sæt højeste til sidste gæt minus 1
  console.log("Nyt interval: ", guessRange);
  computerGuess();
});
lowBtn.addEventListener("click", () => {
  console.log("For lavt!");
  guessRange.lowest = lastGuess + 1; //sæt laveste til sidste gæt plus 1
  console.log("Nyt interval: ", guessRange);
  computerGuess();
}); 

//styling-relateret - ikke nødvendig for funktionalitet:
function resizeInput() {
  this.style.width = this.value.length + "ch";
}

///debug:
