"use strict";

import { rng } from "../utils/utils.js";
import { resizeInput } from "../utils/utils.js";

const speedSlider = document.querySelector("input#speedslider");
const secretOption = document.querySelector("button#secrets");
const settings = document.querySelector("#options");

secretOption.addEventListener("click", toggleOptions);

function toggleOptions() {
  secretOption.classList.toggle("active"), settings.classList.toggle("active");
}

const list = document.querySelector("ul");
let maxCols = 20;
let currentNum = 0;
let columnHeight = 0;

//   resizeInput(speedSlider, 10);

speedSlider.addEventListener("input", () => {
  //resizeInput() bliver kørt på speedSlider hver gang den opdateres
  resizeInput(speedSlider, 10);
});

list.style.setProperty("--maxcols", `${maxCols}`);
// list.appendChild(li);

function appendLi() {
  let currentSpeed = Number(speedSlider.value) * 1000;

  console.log("Current speed: " + currentSpeed);
  if (currentNum >= maxCols) {
    // document.removeChild(`li.${currentNum - maxCols}`)
    const oldestLi = list.querySelector(`li.col-${currentNum - maxCols - 1}`);
    if (oldestLi) {
      list.removeChild(oldestLi);
    }
  }

  columnHeight = rng(0, 100);
  const li = document.createElement("li");
  li.classList = `col-${currentNum}`;
  li.style.setProperty("--height", `${columnHeight}`);
  li.title = "Height: " + columnHeight;
  list.appendChild(li);
  currentNum++;
  console.log(`Appended colum no. ${currentNum}, (Height: ${columnHeight})`);
  setTimeout(() => {
    appendLi();
  }, currentSpeed);
}

appendLi();

//set up a maxmium amount for created li elements;
//when reached, go back to the first and replace previous
//li elements accordingly
