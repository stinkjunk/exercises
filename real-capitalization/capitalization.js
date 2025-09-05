"use strict";
const printOriginal = document.querySelector("#ogArray");
const printCap = document.querySelector("#capArray");

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

const capArray = originalArray.map((item) => item.slice(0, 1).toUpperCase() + item.slice(1).toLowerCase());

console.log("originalt array:", originalArray, "Capitalized Array:", capArray);


printOriginal.textContent = "[" + originalArray.join(", ") + "]";
printCap.textContent = "[" + capArray.join(", ") + "]";
