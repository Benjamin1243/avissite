let heading = localStorage.getItem("overskrift");
const headingText = document.querySelector("#heading");
headingText.textContent = heading;
 
let text = localStorage.getItem("tekst");
const tekstText = document.querySelector("#tekst");
tekstText.textContent = text;
 
let price = Number(localStorage.getItem("pris"));
const prisText = document.querySelector("#pris");
prisText.textContent = price + ",00";
 
let discount = Number(localStorage.getItem("pris"));
const rabatText = document.querySelector("#rabat");
rabatText.textContent = discount + ",00";
 
const totalText = document.querySelector("#total");
totalText.textContent = price - discount + ",00";

