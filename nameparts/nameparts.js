

"use strict";

const printString = document.querySelector("#fullname");
const nameParts = document.querySelector("#nameParts");

const name = {
  name: "Cory James Beck",
  nationality: "🇦🇲",
  link: "https://www.youtube.com/watch?v=P51gQv8MaGE", //Armenian Cory, because I #!@*🐅🦍
}; //Overkomplicerede opgaven for at øve mig på at bruge objekter

console.log("name: ",name.name, " nationality: ", name.nationality, " link: ", name.link);

function printIt(name) {
  printString.innerHTML = `<a href="${name.link}" target="_blank">${name.name} ${name.nationality}</a>`;
  const firstName = name.name.split(" ")[0];
  const middleName = name.name.split(" ")[1];
  const lastName = name.name.split(" ")[2];
  console.log("First name: ", firstName, " Middle name: ", middleName, " Last name: ", lastName);
  nameParts.innerHTML = `First name: ${firstName}<br>Middle name: ${middleName}<br>Last name: ${lastName}`;
}

printIt(name);
