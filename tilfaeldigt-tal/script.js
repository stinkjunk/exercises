"use strict";

const randNumSelctor = document.querySelector("#randnum");
const maxInput = document.querySelector("#maxnum");
randNumSelctor.innerHTML = ">[tryk her eller på mellemrum]";
let maxNum = 100;

//importerer fra utils.js
import { rng } from "../utils/utils.js"; import { attatchSpaceListener } from "../utils/utils.js"; import { resizeInput } from "../utils/utils.js";

//lidt kode som gør at RNG funktionen også bliver kaldt når mellemrum bliver trykket. ved godt det er ekstra men har det sjovt tihi :)
attatchSpaceListener(getRandNum);  
randNumSelctor.addEventListener("mousedown", getRandNum); 

function getRandNum() {
  maxNum = Number(maxInput.value); //sørger for at maxNum ikke er en string
  let randNum = rng(0, maxNum);
  randNumSelctor.innerHTML = `>[${randNum}]`; ///kantede paranteser [] er kun et æstetisk valg
}
// dynamisk opdatering når input ændres
maxInput.addEventListener("input", () => resizeInput(maxInput, null)); 
//Forstår ikke punkt 4
