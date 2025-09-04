"use strict";
const header = document.querySelector(".header");
const footer = document.querySelector(".footer");
const content = document.querySelector(".contentText");

const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
      { text: "Inhalt:", location: ".content" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
      { text: "Indhold:", location: ".content" },
    ],
  },
};
let locale = "da";

console.log("Dansk: ", texts["da"])
console.log("Tysk: ", texts["de"])
console.log(`Locale (${locale}): `, texts[locale])

//innerHTML betyder at siden parser det som HTML
//textContent betyder at siden parser det som tekst
//(Inkluderende HTML-tags)



function printText(locale) {
  console.log("printText called with argument: ", locale);
  locale.texts.forEach((text) => {
    console.log("Current text: ", text);
    if (text.location === ".header") {
      header.innerHTML = `<p>${text.text}</p>`;
    } else if (text.location === ".footer") {
      footer.innerHTML = `<p>${text.text}</p>`;
    } else if (text.location === ".content") {
      content.innerHTML = `<p>${text.text}</p>`;
    }
  });
}

printText(texts[locale]);