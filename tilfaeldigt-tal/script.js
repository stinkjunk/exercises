const randNumSelctor = document.querySelector("#randnum");
const maxInput = document.querySelector("#maxnum");

randNumSelctor.innerHTML = ">[tryk her eller på mellemrum]";

let maxNum = 100;

//lidt kode som gør at RNG funktionen også bliver kaldt når mellemrum bliver trykket. ved godt det er ekstra men har det sjovt tihi :)
document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    getRandNum();
    event.preventDefault(); // stopper browserens "default" handling når mellemrum bliver trykker (typisk at scrolle nedad)
  }
});

function getRandNum() {
  if (maxInput.value.trim() === "") {
    maxInput.value = 0;
    return getRandNum(); // hvis feltet er tomt sætter feltet sig selv til 0 og genkører
  }
  maxNum = Number(maxInput.value); //sørger for at maxNum ikke er en string
  //   let randNum = Math.floor(Math.random() * 100) + 1;
  let randNum = Math.floor(Math.random() * (maxNum + 1));

  randNumSelctor.innerHTML = `>[${randNum}]`; ///kantede paranteser [] er kun et æstetisk valg

  console.log("Maxnum (", maxNum, ") + 1 = ", maxNum + 1);
}

randNumSelctor.addEventListener("mousedown", getRandNum);

//styling-relateret - ikke nødvendig for funktionalitet:
function resizeInput() {
  this.style.width = this.value.length + "ch";
}

// kalder funtionen når siden loades
// resizeInput.call(maxInput);
// nvm, ikke nødvendigt - har predefineret længden som 3ch i html'en da default tallet er sat til 100, og da jeg bruger monospace vil et hvert 3-cifret tal være lige så langt

// dynamisk opdatering når input ændres
maxInput.addEventListener("input", resizeInput);

///debug:
// randNumSelctor.innerHTML = "[randnum]";
// randNumSelctor.addEventListener("mousedown", () => {
//   console.log("Randnum er klikket");
// });


//Forstår ikke punkt 4
