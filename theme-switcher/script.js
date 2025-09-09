"use strict";

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
console.log("prefersDark: ", prefersDark);

const themeSelector = document.querySelector("[data-theme]");
const selecTheme = document.querySelector("#theme");
const sysTheme = document.querySelector("#sysTheme");

let currentTheme;
if (prefersDark === true) {
    currentTheme = "dark";
    sysTheme.textContent = "Dark";
} else {
    currentTheme = "";
    sysTheme.textContent = "Light";
}

selecTheme.addEventListener("change", () => {
    currentTheme = selecTheme.value;
    if (currentTheme === "system") {
        currentTheme = prefersDark ? "dark" : "";
    }
    themeSelector.setAttribute("data-theme", currentTheme);
});

themeSelector.setAttribute("data-theme", currentTheme);


