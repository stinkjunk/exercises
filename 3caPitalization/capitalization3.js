"use strict";
const printOriginal = document.querySelector("#ogArray");
const prInt = document.querySelector("#arRay");

const originalArray = [
  "alex",
  "Maria",
  "JASON",
  "kevin",
  "Sophia",
  "LUCAS",
  "emma",
  "Daniel",
  "CHLOE",
  "michael",
  "Olivia",
  "RYAN",
  "isabel",
  "Victor",
  "HANNAH",
];

const arRay = originalArray.map((item) => threeCapitalize(item));

function threeCapitalize(str) {
  str = str.toLowerCase();
  return str.slice(0, 2) + str.charAt(2).toUpperCase() + str.slice(3);
  //seperater de første to bogstaver, det tredje bogstav (som kapitaliseres) resten.
  //De konkatineres så og bliver returneret som en ny modificeret streng.
}


console.log("originalt array:", originalArray, "caPitalized array:", arRay);


printOriginal.textContent = "[" + originalArray.join(", ") + "]";
prInt.textContent = "[" + arRay.join(", ") + "]";
