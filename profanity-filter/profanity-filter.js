"use strict";
const printTo = document.querySelector("#text");
const toggle = document.querySelector("#censor");

const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

const ogText =
  "Programmering er sjovt! Men husk altid at bruge var, float og marquee i moderne kodning.";

// const censoredText = "placeholder";

let current = ogText;

toggle.addEventListener("click", () => {
  if (current === ogText) {
    let censoredText = censorText(current);
    console.log("censoredText: ", censoredText);
    current = censoredText;
    toggle.textContent = "Ucensurer";
    printTo.innerHTML = current;
  } else {
    current = ogText;
    toggle.textContent = "Censurer";
    printTo.innerHTML = current;
  }
});

function censorText(text) {
  console.log("text (pre-censor): ", text);
  console.log("(Logged in censorText)");
  curseWords.forEach((word) => {
    if (word.bad === "marquee") {
      text = text.replace(
        word.bad,
        `<marquee class="censored" style="width: ${word.good.length}ch; display: inline-block; vertical-align: middle;">[${word.good}]</marquee>`
      );
    } else {
      text = text.replace(
        word.bad,
        `<span class="censored">[${word.good}]</span>`
      );
      console.log("Bad word: ", word.bad, " Good word: ", word.good);
    }
  });
  console.log("text (post-censor): ", text);
  return text;
}

printTo.innerHTML = ogText;
toggle.textContent = "Censurer";
