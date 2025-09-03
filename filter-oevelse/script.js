"use strict";

const elKnap = document.querySelector("#erEl");
const ovrToKnap = document.querySelector("#ovrTo");
const ejrJonasKnap = document.querySelector("#ejrJonas");
const rugBrdMultiKnap = document.querySelector("#rugBrdMulti");
const rydKnap = document.querySelector("#clear");

const vehicles = [
  {
    type: "Bus",
    fuel: "Diesel",
    passengers: 45,
    stops: ["Nørrebrogade", "Elmegade"],
  },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  {
    type: "Cykel",
    fuel: "Rugbrød",
    passengers: 0,
    ownedBy: "Jonas",
    isElectric: true,
  },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  {
    type: "Cykel",
    fuel: "Rugbrød",
    passengers: 2,
    ownedBy: "Vingegård",
    isTandem: true,
  },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];
const tbodyPointer = document.querySelector("tbody");

function hasProperty(obj, property) {
  return obj.hasOwnProperty(property);
}

//(vehicle => ...) betyder at funktionen går igennem alle objekter i vehicles array
//vehicle.property === x returnener kun de ønskede objekter i det nye array, defineret
//ved const (f.eks. kunEl)↴

const kunEl = vehicles.filter((vehicle) => vehicle.isElectric === true);

console.log("kunEl:", kunEl);

//vehicle.passengers > 2 returnerer kun de objekter hvor passengers er større end 2.
//"&&" står for logisk AND (og "||" for logisk OR. - ikke brugt her, men som en huskeregel
//for mig selv)↴

const kunOvrTo = vehicles.filter((vehicle) => vehicle.passengers > 2);
console.log("kunOvrTo:", kunOvrTo);

const kunEjrJonas = vehicles.filter((vehicle) => vehicle.ownedBy === "Jonas");
console.log("kunEjrJonas:", kunEjrJonas);

const kunRugBrdMulti = vehicles.filter(
  (vehicle) => vehicle.passengers > 1 && vehicle.fuel === "Rugbrød"
);
console.log("kunRugBrdMulti:", kunRugBrdMulti);

showTheseVehicles(vehicles);

//()=> hentyder til en anonym funktion, da showTheseVehicles kaldes med et argument (vehicles).
//Hvis der ikke blev angivet en anonymum funktion, så ville funktionen køre når siden blev loaded.↴

elKnap.addEventListener("click", () => showTheseVehicles(kunEl));
ovrToKnap.addEventListener("click", () => showTheseVehicles(kunOvrTo));
ejrJonasKnap.addEventListener("click", () => showTheseVehicles(kunEjrJonas));
rugBrdMultiKnap.addEventListener("click", () =>
  showTheseVehicles(kunRugBrdMulti)
);
rydKnap.addEventListener("click", () => showTheseVehicles(vehicles));

function showTheseVehicles(arr) {
  tbodyPointer.innerHTML = "";
  arr.forEach((each) => {
    function isDefined(property, isBool) {
      //funktion som checker, om at den angivende property
      //er defineret. Hvis den angivender property er en boolean så returnerer den et flueben
      //hvis sandt og et kryds hvis udefineret.
      if (property === true) return "✅";
      else if (isBool === true && property === undefined) return "❌";
      else if (property === undefined) return '<span class="na">NA</span>';
      else return property;
    }
    function yiLongMa(owner) { //我叫马义龙!
      if (owner === "Elon")
        return '<a href="https://www.youtube.com/watch?v=DSq6HJtQtLM" target="_blank">Yi Long Ma</a>';
      else return owner;
    }
    tbodyPointer.innerHTML += `<tr>
  <td>${isDefined(each.type)}</td>
  <td>${isDefined(each.fuel)}</td>
  <td>${isDefined(each.passengers)}</td>
  <td>${isDefined(each.stops)}</td>
  <td>${yiLongMa(isDefined(each.ownedBy))}</td>
  <td>${isDefined(each.isElectric, true)}</td>
  <td>${isDefined(each.isTandem, true)}</td>
</tr>`;
  });
}
