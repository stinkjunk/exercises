"use strict";

window.addEventListener("DOMContentLoaded", start);

const filterButtons = document.querySelectorAll("[data-action=filter]");

let allAnimals = [];

// The prototype for all animals:
const Animal = {
  name: "",
  desc: "-unknown animal-",
  type: "",
  age: 0,
};

function start() {
  console.log("ready");

  // TODO: Add event-listeners to filter and sort buttons
  filterButtons.forEach((button) => {
    let currentAnimals = []; //variable array that passes the
    //desired animals to the displayList function
    button.addEventListener("click", () => {
      console.log(button.dataset.filter);
      if (button.dataset.filter === "*") {
        currentAnimals = allAnimals;
        displayList(currentAnimals);
      } else {
        currentAnimals = allAnimals.filter(
          (animal) => animal.type === button.dataset.filter
        );
        displayList(currentAnimals);
      }
    });
  });

  loadJSON();
}

async function loadJSON() {
  const response = await fetch("animals.json");
  const jsonData = await response.json();

  // when loaded, prepare data objects
  prepareObjects(jsonData);
}

function prepareObjects(jsonData) {
  allAnimals = jsonData.map(preapareObject);

  // TODO: This might not be the function we want to call first
  displayList(allAnimals);
}

function preapareObject(jsonObject) {
  const animal = Object.create(Animal);

  const texts = jsonObject.fullname.split(" ");
  animal.name = texts[0];
  animal.desc = texts[2];
  animal.type = texts[3];
  animal.age = jsonObject.age;
  allAnimals.push(animal);

  return animal;
}

console.log("allAnimals: ", allAnimals);

function displayList(animals) {
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
  animals.forEach(displayAnimal);
}

function displayAnimal(animal) {
  // create clone
  const clone = document
    .querySelector("template#animal")
    .content.cloneNode(true);

  // set clone data
  clone.querySelector("[data-field=name]").textContent = animal.name;
  clone.querySelector("[data-field=desc]").textContent = animal.desc;
  clone.querySelector("[data-field=type]").textContent = animal.type;
  clone.querySelector("[data-field=age]").textContent = animal.age;

  // append clone to list
  document.querySelector("#list tbody").appendChild(clone);
}
