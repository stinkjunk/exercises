"use strict";

let hueVal = 0; //H
let satVal = 100; //S
let lightVal = 100; //L
//default = white

const body = document.querySelector("body");

document.addEventListener("mousemove", (e) => {
  hueVal = (e.clientX / body.clientWidth) * 360; //360 is the max hue value
  lightVal = 100 - (e.clientY / body.clientHeight) * 100; //100 is the max light value
  updateBackground();
});

document.addEventListener("wheel", (e) => {
  let sensitivity = 7.5;
  let change = e.deltaY;
  if (change > 0) satVal -= sensitivity; 
  else satVal += sensitivity; //checks if mousewhell is scrolled up or down, then changes the saturation value per sensitivity increment
  satVal = Math.max(0, Math.min(100, satVal)); //clamp from 0 to 100
  console.log("satVal: ", satVal);
  updateBackground();
});

function updateBackground() {
  //update the background color
  body.style.setProperty(
    "background-color",
    `hsl(${hueVal}, ${satVal}%, ${lightVal}%)`
  );
}
