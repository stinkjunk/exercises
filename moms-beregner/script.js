const prisInput = document.querySelector("#input");
const momsOutput = document.querySelector("#resultattekst");
const goBtn = document.querySelector("#gobtn");

import { resizeInput } from "../utils/utils.js"; import { attatchSpaceListener } from "../utils/utils.js";

attatchSpaceListener(udregnMoms);
goBtn.addEventListener("click", () => {
  // kald uden argument = default bruges 
  udregnMoms();
});
prisInput.addEventListener("input", () => resizeInput(prisInput, null));
function udregnMoms(procent = 25) {
  const broek = (procent / 100);
  const pris = (prisInput.value);
  const moms = (pris * broek);
  console.log(`pris: ${pris}, procent: ${procent}, broek: ${broek}, moms: ${moms}`);
  momsOutput.innerHTML = `Prisen inkl. moms er: <i class="green">${Number(pris) + moms} kr.-</i>`;
}
