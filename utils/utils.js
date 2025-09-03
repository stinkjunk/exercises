//genandvendelige værktøjer

//RNG
export function rng(min = 0, max = 100) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//attach mellemrumslytter
export function attatchSpaceListener(onSpace) {
  document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
      event.preventDefault(); // stopper browserens "default" handling når mellemrum bliver trykker (typisk at scrolle nedad)
      console.log("Mellemrum trykket");
      if (typeof onSpace === "function") {
        onSpace();
      } else {
        console.error(`"${onSpace}" er ikke en funktion`); //fejlmeddelelse for debug
      }
    }
  });
}

//dynamisk opdatering af input felter
export function resizeInput(sent, maxNum = 100) {
  sent.style.width = sent.value.length + "ch";
  if (sent.value.trim() === "") {
    sent.value = 0; //sætter feltet til 0 hvis feltet er tomt
    return resizeInput(sent); // hvis feltet er tomt sætter feltet sig selv til 0 og genkører
  } else if (sent.value.length > 1 && sent.value[0] === "0") {
    sent.value = sent.value.slice(1); //hvis feltet er mere end 1 tegn og det første tegn er 0, slettes det første tegn
  }
  if (typeof maxNum === "number" && Number(sent.value) > maxNum) {
    sent.value = maxNum;
  }
  sent.style.width = Math.max(String(sent.value).length) + "ch"; //tæller antallet af tegn i sent og sætter feltets bredde til dette
}


//le mesopotamian copper scam:
function 𒈨𒌍𒁉𒉌𒂍𒄑(𒈨𒌍) {
  let 𒄑𒉌𒂍𒊏;
  if (𒈨𒌍 === "𒂊𒀸𒉈𒊏") {
    𒄑𒉌𒂍𒊏 = "𒈪𒀀𒁕";
  }
  return 𒄑𒉌𒂍𒊏; 
}