"use strict";

import { rng } from "../utils/utils.js";
//note to self - lav for sjov et lignende setup som tester hvor tilfældigt
//JS math.random egentlig er - f.eks med at køre rng mellem 0-100 hvor hvert nummer
//inklusivt 0 og 100 er representeret med en søjle. Den grafiske højde på "diagrammet"
//justeres automatisk i CSS i relation til den nuværende højeste søjle. (Eller, raster
//på <canvas/>? Kunne bruge det som en undskyldning for at lære... Anyways, når funktionen
//(f.eks rng(0, 100) ) har kørt, plusses der på højden af søjlen af det korresponderende
//resultat. Efter funktionen har kørt et højt atnal gange (f.eks 10k), burde søjlerne allesammen
//have visuelt identiske højder. Du kunne også køre sandsynlighed af kombinationer og se om du
//ville kunne gro et søjlediagram som ligner normalfordelingen. Kender ikke mekanikken bag dette;
//ved bare at jeg spontant kom til at "gro" mønsteret da jeg valgte at skrive resultaterne af en
//10. klasses statistik øvelse ned på papir med søjler.
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
