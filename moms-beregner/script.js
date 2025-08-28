const prisInput = document.querySelector("#input");
const momsOutput = document.querySelector("#resultattekst");
const goBtn = document.querySelector("#gobtn");

prisInput.addEventListener("input", resizeInput);
goBtn.addEventListener("click", () => {
  // kald uden argument = default bruges 
  udregnMoms();
});
function udregnMoms(procent = 25) {
  const broek = (procent / 100);
  const pris = (prisInput.value);
  const moms = (pris * broek);
  console.log(`pris: ${pris}, procent: ${procent}, broek: ${broek}, moms: ${moms}`);
  momsOutput.innerHTML = `Prisen inkl. moms er: <i class="green">${Number(pris) + moms} kr.-</i>`;
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
