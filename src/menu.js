import cafeImg from "./images/cafe.jpg";
import orangeImg from "./images/orange.jpeg";
import saladeImg from "./images/salade.jpg";
import omeletteImg from "./images/omelette.jpg";
import fritesImg from "./images/frites.jpg";


// src/menu.js
export default function loadMenu() {
  const content = document.getElementById("content");
  content.innerHTML = ""; // vider le contenu précédent

  // Card principale
  const card = document.createElement("div");
  card.classList.add("card");

  // Grand titre MENU
  const mainTitle = document.createElement("h2");
  mainTitle.textContent = "MENU";
  card.appendChild(mainTitle);

  // ---- Boissons ----
  const drinksTitle = document.createElement("h3");
  drinksTitle.textContent = "Boissons";
  card.appendChild(drinksTitle);

  // Liste des boissons
  const drinks = [
    {
      name: "Café Espresso",
      desc: "Café noir intense et aromatique",
      price: "2.50 $",
      img: cafeImg,
    },
    {
      name: "Jus Orange Frais",
      desc: "Pressé à la main tous les matins",
      price: "3.00 $",
      img: orangeImg,
    }
  ];

  drinks.forEach(drink => {
    const box = document.createElement("div");
    box.classList.add("card-box");

    const title = document.createElement("h4");
    title.textContent = drink.name;

    const description = document.createElement("p");
    description.textContent = drink.desc;

    const price = document.createElement("p");
    price.textContent = drink.price;

    const img = document.createElement("img");
    img.src = drink.img;
    img.alt = drink.name;
    img.style.maxWidth = "100px";

    box.append(title, description, price, img);
    card.appendChild(box);
  });

  // ---- Accompagnements ----
  const sidesTitle = document.createElement("h3");
  sidesTitle.textContent = "Accompagnement";
  card.appendChild(sidesTitle);

  const sides = [
    {
      name: "Salade Fraîche",
      desc: "Mélange de légumes frais de saison",
      price: "4.50 $",
      img: saladeImg,
    },
    {
      name: "Frites Maison",
      desc: "Cuites à la perfection, croustillantes",
      price: "3.50 $",
      img: fritesImg
    }
  ];

  sides.forEach(side => {
    const box = document.createElement("div");
    box.classList.add("card-box");

    const title = document.createElement("h4");
    title.textContent = side.name;

    const description = document.createElement("p");
    description.textContent = side.desc;

    const price = document.createElement("p");
    price.textContent = side.price;

    const img = document.createElement("img");
    img.src = side.img;
    img.alt = side.name;
    img.style.maxWidth = "100px";

    box.append(title, description, price, img);
    card.appendChild(box);
  });

  // ---- Plats ----
  const dishesTitle = document.createElement("h3");
  dishesTitle.textContent = "Plats";
  card.appendChild(dishesTitle);

  const dishes = [
    {
      name: "Omelette du Chef",
      desc: "Omelette aux fines herbes et fromage",
      price: "7.50 $",
      img: omeletteImg,
    },
    {
      name: "Pancakes aux Myrtilles",
      desc: "Accompagnés de sirop d’érable maison",
      price: "6.50 $",
      img: omeletteImg,
    }
  ];

  dishes.forEach(dish => {
    const box = document.createElement("div");
    box.classList.add("card-box");

    const title = document.createElement("h4");
    title.textContent = dish.name;

    const description = document.createElement("p");
    description.textContent = dish.desc;

    const price = document.createElement("p");
    price.textContent = dish.price;

    const img = document.createElement("img");
    img.src = dish.img;
    img.alt = dish.name;
    img.style.maxWidth = "100px";

    box.append(title, description, price, img);
    card.appendChild(box);
  });

  // Ajouter la card au contenu
  content.appendChild(card);
}
