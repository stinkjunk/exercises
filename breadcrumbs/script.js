const genBtn = document.querySelector("button#genCrumbs");
const path = document.querySelector("div#path");
const crumbs = [
    {name: "Shop", level: 0},
    {name: "Hvidevarer", level: 1},
    {name: "Vaskemaskiner", level: 2},
    {name: "Bosch", level: 3},
]


console.log(crumbs);
genBtn.addEventListener("click", genCrumbs);

function genCrumbs() {
    let str = "";
    crumbs.forEach((crumb, number) => {
        console.log(crumb);
        
        if (number < crumbs.length - 1) {
            str += `<a href="#">${crumb.name}</a><p>/</p>`;
        } else {
            str += `<p>${crumb.name}</p>`;
        }
        console.log("nuværende str: " + str);
        return str;


    });
    console.log("endelig str: " + str);
    path.innerHTML = str;


}


