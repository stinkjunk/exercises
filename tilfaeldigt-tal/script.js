const randNumSelctor = document.querySelector("#randnum");

randNumSelctor.innerHTML = "[tryk]";

function getRandNum() {
    let randNum = Math.floor(Math.random() * 100) + 1;
    randNumSelctor.innerHTML = `[${randNum}]`; ///kantede paranteser [] er kun et æstetisk valg

}


randNumSelctor.addEventListener("mousedown", getRandNum)

///debug:
// randNumSelctor.innerHTML = "[randnum]";
// randNumSelctor.addEventListener("mousedown", () => {
//   console.log("Randnum er klikket");
// });
