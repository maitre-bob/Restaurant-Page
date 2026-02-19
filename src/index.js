import "./style.css";

import loadHome from "./Home.js";
import loadMenu from "./menu.js";
import loadContact from "./contacts.js";


// Sélection des boutons
const btnAccueil = document.getElementById("btn-accueil");
const btnMenu = document.getElementById("btn-menu");
const btnContacts = document.getElementById("btn-contacts");

function setActive(activeBtn) {
  const buttons = document.querySelectorAll(".nav-btn");

  buttons.forEach(btn => btn.classList.remove("active"));

  activeBtn.classList.add("active");
}

// Charger l'accueil par défaut au chargement
loadHome();
setActive(btnAccueil);

// Ajouter les listeners
btnAccueil.addEventListener("click", () => {
  loadHome();
  setActive(btnAccueil);
});

btnMenu.addEventListener("click", () => {
  loadMenu();
  setActive(btnMenu);
});

btnContacts.addEventListener("click", () => {
    loadContact(btnContacts);
    setActive(btnContacts);
});
