"use strict";
const countDownBar = document.querySelector("#countDownBar");
const message = document.querySelector("#message");

countDownBar.addEventListener("animationend", redirect);

document.addEventListener("mousemove", stopCountDown); //you can only delay the inevitable

function startCountDown() {
    countDownBar.classList.add("anim");
    message.textContent = "Are you still watching?";
}

function stopCountDown() {
    countDownBar.classList.remove("anim");
    message.textContent = "You're watching!";
    setTimeout(startCountDown, 20000);
    //will start countdown again after 20 seconds
}

startCountDown();

function redirect() {
  window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; //never gonna give you up
}