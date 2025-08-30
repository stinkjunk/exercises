"use strict";

const rckbtn = document.querySelector("button.rock");
const papbtn = document.querySelector("button.paper");
const scsbtn = document.querySelector("button.scissors");
const playerHands = document.querySelectorAll(".player");
const playerHand = document.querySelector("#player1");
const compuHand = document.querySelector("#player2");
rckbtn.addEventListener("mousedown", choiceRock);
papbtn.addEventListener("mousedown", choicePaper);
scsbtn.addEventListener("mousedown", choiceScissors);
const compuChoice = ["Rock", "Paper", "Scissors"]; //Array af valgmuligheder computeren tilfældigt kan vælge
const tie = document.querySelector("#draw");
const win = document.querySelector("#win");
const loss = document.querySelector("#lose");

// import { rng } from "../utils/utils.js"; //whatever

// let playerScore = 0;
// let compuScore = 0;
//Ovenstående for en 3-runders sten-saks papir - Vi fik ikke ressourcerne (rundetæller, scoretæller etc.) tildelt i HTML'en i vores opgave, så det er ikke implementeret.

function choiceRock() {
  console.log("Player choice: Rock");
  playGame("Rock");
}
function choicePaper() {
  console.log("Player choice: Paper");
  playGame("Paper");
}
function choiceScissors() {
  console.log("Player choice: Scissors");
  playGame("Scissors");
}

function playGame(playerChoice) {
  tie.classList = "hidden";
  win.classList = "hidden";
  loss.classList = "hidden";
  playerHand.classList.remove("rock", "paper", "scissors");
  compuHand.classList.remove("rock", "paper", "scissors");
  //Nulstiller billederne og teksten

  console.log("playerChoice = " + playerChoice); //En log af spillerens valg
  const randomIndex = Math.floor(Math.random() * 3); //Computeren vælger et tilfældigt nummer mellem 1-3
  const compuChosen = compuChoice[randomIndex]; //Det valgte nummer ovenover bliver brugt til at vælge den korresponderende data fra compuChoice array
  console.log("compuChosen = " + compuChosen); //Log af computerens valg
  if (playerChoice == compuChosen) {
    handShake("tie", playerChoice, compuChosen);
  }
  else if (
    (playerChoice === "Rock" && compuChosen === "Scissors") ||
    (playerChoice === "Paper" && compuChosen === "Rock") ||
    (playerChoice === "Scissors" && compuChosen === "Paper")
  ) {
    handShake("win", playerChoice, compuChosen);
  } else {
    handShake("loss", playerChoice, compuChosen);
  }
}

function handShake(result, playerChoice, compuChoice) {
  console.log("handshake");
  playerHands.forEach((hand) => {
    hand.classList.add("shake");
    hand.addEventListener(
      "animationend",
      () => {
        hand.classList.remove("shake");
        console.log("Animation er sluttet (" + result + ")");
        if (playerChoice === "Rock") {
          playerHand.classList.add("rock");
        } else if (playerChoice === "Paper") {
          playerHand.classList.add("paper");
        } else {
          playerHand.classList.add("scissors");
        }
        if (compuChoice === "Rock") {
          compuHand.classList.add("rock");
        } else if (compuChoice === "Paper") {
          compuHand.classList.add("paper");
        } else {
          compuHand.classList.add("scissors");
        }
        //Skifter billedet til det valgte
        if (result === "tie") tie.classList.remove("hidden");
        if (result === "win") win.classList.remove("hidden");
        if (result === "loss") loss.classList.remove("hidden");
        //Viser resultatet
      },
      { once: true }
    );
  });
}
