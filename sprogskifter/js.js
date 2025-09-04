"use strict";
const header = document.querySelector(".header");
const footer = document.querySelector(".footer");
const content = document.querySelector(".contentText");
const localeSelect = document.querySelector("#locale");
const danishOption = document.querySelector("span.langDa");
const germanOption = document.querySelector("span.langDe");

localeSelect.addEventListener("change", () => {
  const locale = localeSelect.value; //virker, da valgmulighederne (angivet i options under
  // HTML) er navngivet da og de, det samme som objekterne i texts
  printText(texts[locale]);
});

const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
      { text: "Inhalt:", location: ".content" },
      { text: "Dänisch", location: ".langDa" },
      { text: "Deutsch", location: ".langDe" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
      { text: "Indhold:", location: ".content" },
      { text: "Dansk", location: ".langDa" },
      { text: "Tysk", location: ".langDe" },
    ],
  },
};
let locale = "da";

console.log("Dansk: ", texts["da"]);
console.log("Tysk: ", texts["de"]);
console.log(`Locale (${locale}): `, texts[locale]);

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
    } else if (text.location === ".langDa") {
      danishOption.innerHTML = `<p>${text.text}</p>`;
    } else if (text.location === ".langDe") {
      germanOption.innerHTML = `<p>${text.text}</p>`;
    }
  });
}

printText(texts[locale]);
