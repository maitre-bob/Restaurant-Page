// src/contact.js
export default function loadContact() {
  const content = document.getElementById("content");
  content.innerHTML = ""; // vider le contenu précédent

  // Card principale
  const card = document.createElement("div");
  card.classList.add("card");

  // Grand titre Contactez-nous
  const mainTitle = document.createElement("h2");
  mainTitle.textContent = "Contactez-nous";
  card.appendChild(mainTitle);

  // Liste des trois contacts
  const contacts = [
    {
      title: "Responsable Général",
      name: "Jean-Pierre Dubois",
      phone: "+509 1234-5678",
      email: "jeanpierre@restaurantodin.ht"
    },
    {
      title: "Service Client",
      name: "Marie-Claire Toussaint",
      phone: "+509 8765-4321",
      email: "support@restaurantodin.ht"
    },
    {
      title: "Réservations",
      name: "Lucien Joseph",
      phone: "+509 1122-3344",
      email: "reservation@restaurantodin.ht"
    }
  ];

  // Créer une card-box pour chaque contact
  contacts.forEach(contact => {
    const box = document.createElement("div");
    box.classList.add("card-box");

    const boxTitle = document.createElement("h3");
    boxTitle.textContent = contact.title;

    const nameLine = document.createElement("p");
    nameLine.textContent = `Nom : ${contact.name}`;

    const phoneLine = document.createElement("p");
    phoneLine.textContent = `Téléphone : ${contact.phone}`;

    const emailLine = document.createElement("p");
    emailLine.textContent = `Email : ${contact.email}`;

    box.append(boxTitle, nameLine, phoneLine, emailLine);
    card.appendChild(box);
  });

  // Ajouter la card principale au contenu
  content.appendChild(card);
}
