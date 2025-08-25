const randNumSelctor = document.querySelector("#randnum");

randNumSelctor.innerHTML = "[tryk her eller på mellemrum]";

//lidt kode som gør at RNG funktionen også bliver kaldt når mellemrum bliver trykket. ved godt det er ekstra men har det sjovt tihi :)
document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    getRandNum();
    event.preventDefault(); // stopper browserens "default" handling når mellemrum bliver trykker (typisk at scrolle nedad)
  }
});

function getRandNum() {
  let randNum = Math.floor(Math.random() * 100) + 1;
  randNumSelctor.innerHTML = `[${randNum}]`; ///kantede paranteser [] er kun et æstetisk valg
}

randNumSelctor.addEventListener("mousedown", getRandNum);

///debug:
// randNumSelctor.innerHTML = "[randnum]";
// randNumSelctor.addEventListener("mousedown", () => {
//   console.log("Randnum er klikket");
// });
