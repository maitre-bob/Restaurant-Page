import "./style.css";

import loadHome from "./Home.js";
import loadMenu from "./menu.js";
import loadContact from "./contacts.js";

// Charger l'accueil par défaut au chargement
loadHome();

// Sélection des boutons
const btnAccueil = document.getElementById("btn-accueil");
const btnMenu = document.getElementById("btn-menu");
const btnContacts = document.getElementById("btn-contacts");

// Ajouter les listeners
btnAccueil.addEventListener("click", () => {
  loadHome();
});

btnMenu.addEventListener("click", () => {
  loadMenu();
});

btnContacts.addEventListener("click", () => {
    loadContact();
});
