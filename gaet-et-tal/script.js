const guessNum = document.querySelector("#guessnum");
const goBtn = document.querySelector("#gobtn");
const feedBack = document.querySelector("#verifytext");

let trueNum = Math.floor(Math.random() * 101);

document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    guessRandNum();
    event.preventDefault();
  }
});

function guessRandNum() {
  if (guessNum.value.trim() === "") {
    guessNum.value = 0;
    return guessRandNum(); // hvis feltet er tomt sætter feltet sig selv til 0 og genkører
  }
  let guessedNum = Number(guessNum.value);
  if (guessedNum > trueNum) {
    console.log("for højt! ", guessedNum, " > ", trueNum);
    feedBack.innerHTML = "For højt!"
    feedBack.classList = "red"
  } else if (guessedNum < trueNum) {
    console.log("for lavt ", guessedNum, " < ", trueNum);
        feedBack.innerHTML = "For lavt!"
    feedBack.classList = "red"
  } else {
    console.log("sandt; ", guessedNum, " = ", trueNum);
        feedBack.innerHTML = `Sandt! Nummeret er ${trueNum}`
    feedBack.classList = "green"
    victoryAnim();
  }


}

function victoryAnim() {
  console.log("Sejrsanimation!")
  //Sejr-animation goes here
}

goBtn.addEventListener("mousedown", guessRandNum, console.log("goBtn trykket"));

//styling-relateret - ikke nødvendig for funktionalitet:
function resizeInput() {
  this.style.width = this.value.length + "ch";
}

// kalder funtionen når siden loades
// resizeInput.call(guessNum);
// nvm, ikke nødvendigt - har predefineret længden som 3ch i html'en da default tallet er sat til 100, og da jeg bruger monospace vil et hvert 3-cifret tal være lige så langt

// dynamisk opdatering når input ændres
guessNum.addEventListener("input", resizeInput);

///debug:
console.log(trueNum);
