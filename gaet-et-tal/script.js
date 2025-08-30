"use strict";

const guessNum = document.querySelector("#guessnum");
const goBtn = document.querySelector("#gobtn");
const feedBack = document.querySelector("#verifytext");

import { attatchSpaceListener } from "../utils/utils.js"; import { resizeInput } from "../utils/utils.js"; import { rng } from "../utils/utils.js";


let trueNum = rng(0, 100);

function guessRandNum() {
  resizeInput(guessNum);
  let guessedNum = Number(guessNum.value);
  if (guessedNum > trueNum) {
    console.log("for højt! ", guessedNum, " > ", trueNum);
    feedBack.innerHTML = "For højt!";
    feedBack.classList = "red";
  } else if (guessedNum < trueNum) {
    console.log("for lavt ", guessedNum, " < ", trueNum);
    feedBack.innerHTML = "For lavt!";
    feedBack.classList = "red";
  } else {
    console.log("sandt; ", guessedNum, " = ", trueNum);
    feedBack.innerHTML = `Sandt! Nummeret er ${trueNum}`;
    feedBack.classList = "green";
    victoryAnim();
  }
}

function victoryAnim() {
  console.log("Sejrsanimation!");
}

goBtn.addEventListener("mousedown", guessRandNum, console.log("goBtn trykket"));
attatchSpaceListener(guessRandNum);

// dynamisk opdatering når input ændres
guessNum.addEventListener("input", () => resizeInput(guessNum));

///debug:
console.log(trueNum);
