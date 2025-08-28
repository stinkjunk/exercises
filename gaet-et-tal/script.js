"use strict";

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
    feedBack.innerHTML = "For højt!";
    feedBack.classList = "red";
  } else if (guessedNum < trueNum) {
    console.log("for lavt ", guessedNum, " < ", trueNum);
    feedBack.innerHTML = "For lavt!";
    feedBack.classList = "red";
  } else {
    console.log("sandt; ", guessedNum, " = ", trueNum);
    feedBack.innerHTML = `Sandt! Nummeret er ${trueNum}`;
    feedBack.classList = "green";
    victoryAnim();
  }
}

function victoryAnim() {
  //Idéen her er en matrix-regn type animation. Skriver dette i tilfælde jeg aldrig blev færdig.
  console.log("Sejrsanimation!");
  //Sejr-animation goes here

  //find ud af dette!
  const canvas = document.getElementById("matrixCanvas");
  const ctx = canvas.getContext("2d"); //redegør for et to dimensionelt workspace m. relevante værktøjer

  const chars = //min liste af karakterer som kan bruges i animationen (har spurgt GPT om en liste med karakterer fra forskellige sprog)
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + // Latin uppercase
    "abcdefghijklmnopqrstuvwxyz" + // Latin lowercase
    "αβγδεζηθικλμνξοπρστυφχψω" + // Greek
    "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ" + // Cyrillic uppercase
    "абвгдежзийклмнопрстуфхцчшщъыьэюя" + // Cyrillic lowercase
    "汉字漢字日月水火山" + // Hanzi
    "가나다라마바사아자차카타파하" + // Hangul
    "あいうえおかきくけこさしすせそ" + // Hiragana
    "ሀሁሂሃሄህሆለሉሊላ" + // Ethiopic (Ge‘ez)
    "აბგდევზთიკლმნოპჟ" + // Georgian
    "ԱԲԳԴԵԶԷԸԹԺԻԼԽԾԿՀ" + // Armenian
    "0123456789"; // Numbers

  let n = 0;
  function draw() {
    n++;
    console.log(`draw kørt ${n} gang(e)`);

    if (n < 300) {
      requestAnimationFrame(draw);
      ///kalder draw() funktionen for hver gang browseren opdaterer (hver frame)
    } else {
      console.log("Sejrsanimation kørt");
    }
  }

  draw(); ///draw køres for første gang; starter loopet
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
