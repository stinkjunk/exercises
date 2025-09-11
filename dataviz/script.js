"use strict";

const data = "https://kea-alt-del.dk/kata-distortion/";
const visualizer = document.querySelector("#visualizer");
let currentData = visualizer.textContent;

function loadJSON() {
  fetch("https://kea-alt-del.dk/kata-distortion/")
    .then((response) => response.json())
    .then((jsonData) => {
      console.log("jsonData: ", jsonData);
      displayData(jsonData);
    });
}

function displayData(data) {
  visualizer.textContent = data.inQueue;
  if (data.inQueue != currentData) {
    visualizer.classList.add("bounce");
    currentData = data.inQueue;
    setTimeout(() => {
      visualizer.classList.remove("bounce");
    }, 500);
  }
}

function update() {
  loadJSON();
  setTimeout(update, 1000);
  return;
}

update();
