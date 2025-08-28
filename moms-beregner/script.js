const prisInput = document.querySelector("#input");
const momsOutput = document.querySelector("#resultattekst");
const goBtn = document.querySelector("#gobtn");
let procentParam = 25; // default parameter
// dynamisk opdatering når input ændres
prisInput.addEventListener("input", resizeInput);
goBtn.addEventListener("click", () => udregnMoms(procentParam));
// function udregnMoms(procent = 25) opgaven krævede et default parameter, so har inkluderet det her for at vise, jeg forstod - da jeg ikke bare kører den i console men har valgt at lave et UI til det (køres igennem eventListeners), så er parameteret defineret ved kaldet i eventListeneren i stedet.
function udregnMoms(procent) {
  const broek = (procent / 100);
  const pris = (prisInput.value);
  const moms = (pris * broek);
  console.log(`pris: ${pris}, procent: ${procent}, broek: ${broek}, moms: ${moms}`);
  momsOutput.innerHTML = `Prisen inkl. moms er: <i class="green">${Number(pris) + moms} kr.</i>`;
}

document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    udregnMoms(procentParam);
    event.preventDefault(); // stopper browserens "default" handling når mellemrum bliver trykker (typisk at scrolle nedad)
  }
});

//styling-relateret - ikke nødvendig for funktionalitet:
function resizeInput() {
  this.style.width = this.value.length + "ch";
}
