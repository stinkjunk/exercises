"use strict";

const inputNum = document.querySelector("#inputnum");
const compAnsw = document.querySelector("#compGuess");
const lowBtn = document.querySelector("#toolow");
const highBtn = document.querySelector("#toohigh");
const guessBtn = document.querySelector("#guessComputer");
let guessRange = { lowest: 0, highest: 100 };
let lastGuess;

import  { resizeInput } from "../utils/utils.js"; import { rng } from "../utils/utils.js";


guessBtn.addEventListener("click", () => {
  computerGuess();
  unhideSecondaryBtns();
});

function computerGuess() {
  console.log("Computer gætter...");
  let compGuess =
    rng(guessRange.lowest, guessRange.highest) //genererer et tilfældigt tal mellem det laveste og det højeste
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

function unhideSecondaryBtns() {
  console.log("startet")
  lowBtn.style.display = "inline";
  highBtn.style.display = "inline";
  guessBtn.style.display = "none";
}
//input
inputNum.addEventListener("input", () => resizeInput(inputNum));

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

///debug:
