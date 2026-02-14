export default function loadHome() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  // Card principale
  const card = document.createElement("div");
  card.classList.add("card");

  // Titre de la card
  const cardTitle = document.createElement("h2");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = "Bienvenue au Restaurant Odin";
  card.appendChild(cardTitle);

  // Boîte éloge
  const praiseBox = document.createElement("div");
  praiseBox.classList.add("card-box");
  const praiseTitle = document.createElement("h3");
  praiseTitle.textContent = "Éloge";
  const praiseText = document.createElement("p");
  praiseText.textContent = "Venez découvrir notre restaurant où chaque plat est préparé avec amour et passion. Nous vous offrons une expérience culinaire unique, alliant qualité, saveur et ambiance conviviale.";
  praiseBox.append(praiseTitle, praiseText);

  // Boîte horaire
  const hoursBox = document.createElement("div");
  hoursBox.classList.add("card-box");
  const hoursTitle = document.createElement("h3");
  hoursTitle.textContent = "Horaire";
  const hoursText = document.createElement("p");
  hoursText.innerHTML = "Lundi – Vendredi : 8h00 – 22h00<br>Samedi – Dimanche : 9h00 – 23h00";
  hoursBox.append(hoursTitle, hoursText);

  // Boîte adresse
  const addressBox = document.createElement("div");
  addressBox.classList.add("card-box");
  const addressTitle = document.createElement("h3");
  addressTitle.textContent = "Adresse";
  const addressText = document.createElement("p");
  addressText.innerHTML = "123 Rue du Gourmet<br>Port-au-Prince, Haïti";
  addressBox.append(addressTitle, addressText);

  // Ajouter toutes les boîtes à la card
  card.append(praiseBox, hoursBox, addressBox);

  // Ajouter la card au contenu
  content.appendChild(card);
}
