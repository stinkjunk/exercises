const prisInput = document.querySelector("#input");
const momsOutput = document.querySelector("#resultattekst");
const goBtn = document.querySelector("#gobtn");
let procent = 25;
let broek = procent / 100;
// dynamisk opdatering når input ændres
prisInput.addEventListener("input", resizeInput);
goBtn.addEventListener("click", udregnMoms);
function udregnMoms() {
  const pris = parseFloat(prisInput.value);
  const moms = pris * (1 + broek);
  console.log(`(${procent}% af ${pris}) + 1 * ${pris} = ${moms}`);
  momsOutput.innerHTML = `Prisen inkl. moms er: <i class="green">${moms.toFixed(2)} kr.</i>`;

  
}

document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    udregnMoms();
    event.preventDefault(); // stopper browserens "default" handling når mellemrum bliver trykker (typisk at scrolle nedad)
  }
});

//styling-relateret - ikke nødvendig for funktionalitet:
function resizeInput() {
  this.style.width = this.value.length + "ch";
}
