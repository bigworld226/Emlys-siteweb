const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const tabs = document.querySelectorAll(".tab");
const menuGrid = document.querySelector("#menuGrid");
const cartList = document.querySelector("#cartList");
const cartCount = document.querySelector("#cartCount");
const cartTotal = document.querySelector("#cartTotal");
const clearCartButton = document.querySelector("#clearCart");
const sendOrderButton = document.querySelector("#sendOrder");
const orderName = document.querySelector("#orderName");
const orderPhone = document.querySelector("#orderPhone");
const orderMode = document.querySelector("#orderMode");
const orderNotes = document.querySelector("#orderNotes");
const revealItems = document.querySelectorAll(".reveal");
const shareButton = document.querySelector("#shareButton");
const forms = document.querySelectorAll("form");
const whatsappNumber = "22607121919";

const basePrices = "Chinchard ou boeuf : 1 500 F • Carpe, mouton, 1/4 poulet ou thon : 2 000 F";
const fullPrices = "Chinchard, boeuf, carpe ou mouton : 2 000 F • 1/4 poulet ou thon : 2 500 F";
const allProteinPrices = "Boeuf, mouton, poisson ou 1/4 poulet : 2 000 F";

const menuImages = {
  attieke: "images/Attieke.jpg",
  brochettes: "images/Brochette_de_filet_de_boeuf.jpg",
  daiguai: "images/Degue.jpg",
  donkounou: "images/Donkounou.jpg",
  eau: "images/Eau_minerale.jpg",
  soda: "images/Fanta_Coca_cola.jpg",
  fonio: "images/Fonio.jpg",
  foutou: "images/Foutou_Banane.jpg",
  frites: "images/Frite_de_pomme_de_terre.jpg",
  benga: "images/Haricot(Benga).jpg",
  haricotVert: "images/Haricot_vert_saute.jpg",
  igname: "images/Igname_Bouillies.jpg",
  ananas: "images/Jus_d'ananas.jpg",
  bissap: "images/Jus_de_Bissap.jpg",
  gingembre: "images/Jus_de_gingembre.jpg",
  petitPois: "images/Petit_pois.jpg",
  placali: "images/Placali.jpg",
  poisson: "images/Poisson_Braise.jpg",
  poulet: "images/Poulet_braise.jpg",
  ragout: "images/Ragout_de_Pomme_de_terre.jpg",
  rizSauce: "images/Riz_Sauce.jpg",
  oseille: "images/Riz_sauce_Oseille.jpg",
  soumbala: "images/Riz_soumbala.jpg",
  soupeBoyau: "images/Soupe_de_Boyau.jpg",
  soupePoisson: "images/Soupe_de_Poisson.jpg",
  soupePoulet: "images/Soupe_de_poulet.jpg",
  spaghetti: "images/Spaghetti_soumbala.jpg",
  tchep: "images/Tchiep.jpg",
  to: "images/To.jpg",
  vermicelle: "images/Vermicelle.jpg",
  viandeFrite: "images/Viande_frite.jpg",
  yaourt: "images/Yaourt.jpg",
  crabe: "images/crabe.jpg",
  salade: "images/Salade.jpg",
  crudite: "images/Crudite.jpg",
};

const menuItems = [
  {
    category: "entrees",
    label: "Nos entrées",
    title: "Salade",
    description: "Oeuf, viande et pain, servie fraîche avec garniture maison.",
    image: menuImages.salade,
    prices: ["Simple : 1 500 F", "Avec boeuf, mouton, chinchard, carpe, thon ou 1/4 poulet : 2 000 F"],
  },
  {
    category: "entrees",
    label: "Nos entrées",
    title: "Crudité",
    description: "Oeuf, viande et pain, assiette croquante et légère.",
    image: menuImages.crudite,
    prices: ["Simple : 1 500 F", "Avec boeuf, mouton, chinchard, carpe, thon ou 1/4 poulet : 2 000 F"],
  },
  {
    category: "plats",
    label: "Nos plats",
    title: "Tchep",
    description: "Riz accompagné de légumes, servi avec la protéine de votre choix.",
    image: menuImages.tchep,
    prices: [basePrices],
  },
  {
    category: "plats",
    label: "Nos plats",
    title: "Haricot vert sauté",
    description: "Haricots verts sautés, assaisonnement maison et accompagnement au choix.",
    image: menuImages.haricotVert,
    prices: [basePrices],
  },
  {
    category: "plats",
    label: "Nos plats",
    title: "Haricot Benga",
    description: "Haricot accompagné de sauce tomate, servi généreusement.",
    image: menuImages.benga,
    prices: [basePrices],
  },
  {
    category: "plats",
    label: "Nos plats",
    title: "Attiéké",
    description: "Attiéké accompagné de légumes et de sauce tomate.",
    image: menuImages.attieke,
    prices: [basePrices],
  },
  {
    category: "plats",
    label: "Nos plats",
    title: "Donkounou",
    description: "Spécialité africaine servie avec sauce et protéine au choix.",
    image: menuImages.donkounou,
    prices: [basePrices],
  },
  {
    category: "plats",
    label: "Nos plats",
    title: "Igname bouillie",
    description: "Igname bouillie accompagnée de sauce oignon sauté.",
    image: menuImages.igname,
    prices: [basePrices],
  },
  {
    category: "plats",
    label: "Nos plats",
    title: "Riz sauce",
    description: "Sauces au choix : graine, aubergine, légume, arachide, feuilles, gombo frais ou gombo sec.",
    image: menuImages.rizSauce,
    prices: [basePrices],
  },
  {
    category: "plats",
    label: "Nos plats",
    title: "Couscous sauce",
    description: "Couscous servi avec sauce légume ou arachide.",
    image: "assets/menu/couscous.jpg",
    prices: ["Toutes les options : 2 000 F"],
  },
  {
    category: "plats",
    label: "Nos plats",
    title: "Fonio sauce",
    description: "Fonio servi avec sauce graine, aubergine ou légume.",
    image: menuImages.fonio,
    prices: ["Toutes les options : 2 000 F"],
  },
  {
    category: "plats",
    label: "Nos plats",
    title: "Foutou banane",
    description: "Sauces au choix : graine, aubergine, légume, arachide ou gombo sec.",
    image: menuImages.foutou,
    prices: [fullPrices],
  },
  {
    category: "plats",
    label: "Nos plats",
    title: "Foutou igname",
    description: "Foutou igname accompagné de sauce graine, aubergine, légume, arachide ou gombo sec.",
    image: menuImages.foutou,
    prices: [fullPrices],
  },
  {
    category: "plats",
    label: "Nos plats",
    title: "Placali",
    description: "Sauces au choix : graine, aubergine, arachide, kopè ou djouglé.",
    image: menuImages.placali,
    prices: [basePrices],
  },
  {
    category: "plats",
    label: "Nos plats",
    title: "Tô",
    description: "Sauces au choix : gombo frais, oseille, feuilles ou djouglé.",
    image: menuImages.to,
    prices: [basePrices],
  },
  {
    category: "fritures",
    label: "Nos fritures",
    title: "Alloco",
    description: "Bananes plantains frites, servies avec sauce tomate.",
    image: "assets/menu/alloco.jpg",
    prices: [allProteinPrices],
  },
  {
    category: "fritures",
    label: "Nos fritures",
    title: "Frites de pomme de terre",
    description: "Pommes de terre frites avec sauce oignon sauté.",
    image: menuImages.frites,
    prices: [allProteinPrices],
  },
  {
    category: "fritures",
    label: "Nos fritures",
    title: "Igname frit",
    description: "Igname frit accompagné de sauce oignon sauté.",
    image: menuImages.igname,
    prices: [allProteinPrices],
  },
  {
    category: "grillades",
    label: "Nos grillades",
    title: "Poisson entier braisé ou frit",
    description: "Servi avec attiéké, aloco, frites, riz ou pain.",
    image: menuImages.poisson,
    prices: ["4 000 F"],
  },
  {
    category: "grillades",
    label: "Nos grillades",
    title: "1/2 poulet braisé ou sauté",
    description: "Demi-poulet préparé à la braise ou sauté, avec accompagnement au choix.",
    image: menuImages.poulet,
    prices: ["3 000 F"],
  },
  {
    category: "grillades",
    label: "Nos grillades",
    title: "Poulet entier braisé, sauté ou frit",
    description: "Poulet entier avec attiéké, aloco, frites, riz ou pain.",
    image: menuImages.poulet,
    prices: ["6 000 F"],
  },
  {
    category: "grillades",
    label: "Sur commande",
    title: "Brochettes de filet de boeuf",
    description: "Commande spéciale à partir de 50 brochettes.",
    image: menuImages.brochettes,
    prices: ["Sur commande"],
  },
  {
    category: "soupes",
    label: "Nos soupes",
    title: "Soupe de poulet",
    description: "Soupe de poulet servie avec l’accompagnement de votre choix.",
    image: menuImages.soupePoulet,
    prices: ["1/4 pain : 1 500 F", "Riz ou couscous ou attiéké : 2 000 F", "Foutou ou foufou : 2 500 F"],
  },
  {
    category: "soupes",
    label: "Nos soupes",
    title: "Soupe de poisson",
    description: "Soupe de poisson chaude et parfumée.",
    image: menuImages.soupePoisson,
    prices: ["1/4 pain : 1 500 F", "Riz, foutou, couscous, attiéké ou foufou : 2 000 F"],
  },
  {
    category: "soupes",
    label: "Nos soupes",
    title: "Soupe de boyau",
    description: "Soupe de boyau avec accompagnement au choix.",
    image: menuImages.soupeBoyau,
    prices: ["1/4 pain : 1 500 F", "Riz ou couscous ou attiéké : 2 000 F", "Foutou ou foufou : 2 500 F"],
  },
  {
    category: "emlys",
    label: "Lundi",
    title: "Vermicelle",
    description: "Plat EMLYS du lundi, servi avec protéine au choix.",
    image: menuImages.vermicelle,
    prices: [basePrices],
  },
  {
    category: "emlys",
    label: "Lundi",
    title: "Riz soumbala",
    description: "Riz parfumé au soumbala, saveur locale intense.",
    image: menuImages.soumbala,
    prices: [basePrices],
  },
  {
    category: "emlys",
    label: "Lundi",
    title: "Spaghetti soumbala",
    description: "Spaghetti revisité avec soumbala et assaisonnement maison.",
    image: menuImages.spaghetti,
    prices: [basePrices],
  },
  {
    category: "emlys",
    label: "Mardi",
    title: "Ragoût pomme de terre",
    description: "Ragoût généreux aux pommes de terre.",
    image: menuImages.ragout,
    prices: ["Chinchard, boeuf, carpe ou mouton : 2 000 F", "1/4 poulet ou thon : 2 500 F"],
  },
  {
    category: "emlys",
    label: "Mardi",
    title: "Foutou banane",
    description: "Sauces au choix : graine, aubergine, légume, arachide ou gombo sec.",
    image: menuImages.foutou,
    prices: [fullPrices],
  },
  {
    category: "emlys",
    label: "Mardi",
    title: "Foutou igname",
    description: "Foutou igname avec sauces africaines au choix.",
    image: menuImages.foutou,
    prices: [fullPrices],
  },
  {
    category: "emlys",
    label: "Mercredi",
    title: "Carpe entière braisée",
    description: "Carpe braisée accompagnée d’attiéké, aloco ou frites.",
    image: menuImages.poisson,
    prices: ["4 000 F"],
  },
  {
    category: "emlys",
    label: "Mercredi",
    title: "Attiéké",
    description: "Attiéké accompagné de sauce tomate.",
    image: menuImages.attieke,
    prices: [basePrices],
  },
  {
    category: "emlys",
    label: "Mercredi",
    title: "Petit pois",
    description: "Petit pois mijoté, servi avec protéine au choix.",
    image: menuImages.petitPois,
    prices: [basePrices],
  },
  {
    category: "emlys",
    label: "Jeudi",
    title: "Igname bouillie",
    description: "Igname bouillie avec sauce maison.",
    image: menuImages.igname,
    prices: [basePrices],
  },
  {
    category: "emlys",
    label: "Jeudi",
    title: "Sauce oseille avec riz",
    description: "Sauce oseille accompagnée de riz.",
    image: menuImages.oseille,
    prices: ["Toutes les options : 2 000 F"],
  },
  {
    category: "emlys",
    label: "Jeudi",
    title: "Sauce oseille avec tô",
    description: "Sauce oseille accompagnée de tô.",
    image: menuImages.oseille,
    prices: [basePrices],
  },
  {
    category: "emlys",
    label: "Vendredi",
    title: "Placali",
    description: "Sauces au choix : kopè ou djouglé.",
    image: menuImages.placali,
    prices: [basePrices],
  },
  {
    category: "emlys",
    label: "Vendredi",
    title: "Donkounou",
    description: "Plat EMLYS du vendredi, servi avec protéine au choix.",
    image: menuImages.donkounou,
    prices: [basePrices],
  },
  {
    category: "emlys",
    label: "Vendredi",
    title: "Haricot Benga",
    description: "Haricot accompagné de sauce tomate.",
    image: menuImages.benga,
    prices: [basePrices],
  },
  {
    category: "boissons",
    label: "Nos boissons",
    title: "Jus de gingembre",
    description: "Boisson fraîche au gingembre.",
    image: menuImages.gingembre,
    prices: ["Grand : 1 000 F", "Petit : 500 F"],
  },
  {
    category: "boissons",
    label: "Nos boissons",
    title: "Jus de bissap",
    description: "Boisson fraîche à base d’hibiscus.",
    image: menuImages.bissap,
    prices: ["Grand : 1 000 F", "Petit : 500 F"],
  },
  {
    category: "boissons",
    label: "Nos boissons",
    title: "Jus d’ananas 0,5 L",
    description: "Jus d’ananas servi frais.",
    image: menuImages.ananas,
    prices: ["500 F"],
  },
  {
    category: "boissons",
    label: "Nos boissons",
    title: "Fanta / Coca-Cola",
    description: "Sodas frais.",
    image: menuImages.soda,
    prices: ["500 F"],
  },
  {
    category: "boissons",
    label: "Nos boissons",
    title: "Eau minérale 1,5 L",
    description: "Bouteille d’eau minérale.",
    image: menuImages.eau,
    prices: ["500 F"],
  },
  {
    category: "desserts",
    label: "Nos desserts",
    title: "Daiguai",
    description: "Dessert local servi au bol.",
    image: menuImages.daiguai,
    prices: ["500 F"],
  },
  {
    category: "desserts",
    label: "Nos desserts",
    title: "Yaourt",
    description: "Yaourt frais pour terminer le repas simplement.",
    image: menuImages.yaourt,
    prices: ["500 F"],
  },
  {
    category: "supplements",
    label: "Nos suppléments",
    title: "Crabe",
    description: "Supplément crabe.",
    image: menuImages.crabe,
    prices: ["1 000 F"],
  },
  {
    category: "supplements",
    label: "Nos suppléments",
    title: "Viande frite",
    description: "Supplément viande frite.",
    image: menuImages.viandeFrite,
    prices: ["À partir de 1 000 F"],
  },
  {
    category: "supplements",
    label: "Nos suppléments",
    title: "Poisson frit",
    description: "Carpe ou chinchard frit en supplément.",
    image: menuImages.poisson,
    prices: ["1 000 F"],
  },
  {
    category: "supplements",
    label: "Nos suppléments",
    title: "1/4 de poulet frit",
    description: "Quart de poulet frit en supplément.",
    image: menuImages.poulet,
    prices: ["1 500 F"],
  },
];

const cart = [];

function formatMoney(amount) {
  return `${amount.toLocaleString("fr-FR")} F`;
}

function extractPrice(priceText) {
  if (/à partir|sur commande/i.test(priceText)) {
    return null;
  }

  const compact = priceText.replace(/\s/g, "");
  const matches = [...compact.matchAll(/(\d{3,5})F/g)].map((match) => Number(match[1]));

  return matches.length === 1 ? matches[0] : null;
}

function escapeAttribute(value) {
  return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

function createMenuItem(item) {
  const optionMarkup = item.prices
    .map((price) => `<option value="${escapeAttribute(price)}">${price}</option>`)
    .join("");

  return `
    <article class="menu-item" data-category="${item.category}">
      <img src="${item.image}" alt="${item.title}" loading="lazy" />
      <div class="menu-item-copy">
        <span>${item.label}</span>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <ul class="price-list">
          ${item.prices.map((price) => `<li>${price}</li>`).join("")}
        </ul>
        <div class="menu-order">
          <label>
            Option
            <select class="menu-option" aria-label="Option pour ${item.title}">
              ${optionMarkup}
            </select>
          </label>
          <button class="add-to-cart" type="button" data-title="${escapeAttribute(item.title)}">
            Ajouter
          </button>
        </div>
      </div>
    </article>
  `;
}

function filterMenu(tab) {
  const selectedCategory = tab.dataset.category;

  tabs.forEach((item) => item.classList.toggle("active", item === tab));
  menuGrid.innerHTML = menuItems
    .filter((item) => item.category === selectedCategory)
    .map(createMenuItem)
    .join("");
}

function addToCart(title, priceText) {
  const key = `${title}__${priceText}`;
  const existingItem = cart.find((item) => item.key === key);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      key,
      title,
      priceText,
      price: extractPrice(priceText),
      quantity: 1,
    });
  }

  renderCart();
}

function updateCartQuantity(key, change) {
  const item = cart.find((cartItem) => cartItem.key === key);

  if (!item) {
    return;
  }

  item.quantity += change;

  if (item.quantity <= 0) {
    const index = cart.indexOf(item);
    cart.splice(index, 1);
  }

  renderCart();
}

function getCartSummary() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const knownTotal = cart.reduce((sum, item) => sum + (item.price || 0) * item.quantity, 0);
  const hasVariablePrice = cart.some((item) => item.price === null);

  return { count, knownTotal, hasVariablePrice };
}

function buildOrderMessage() {
  const { knownTotal, hasVariablePrice } = getCartSummary();
  const lines = [
    "Bonjour EMLYS Restaurant, je souhaite passer une commande :",
    "",
    ...cart.map((item) => `- ${item.quantity} x ${item.title} (${item.priceText})`),
    "",
    `Total estimé : ${formatMoney(knownTotal)}${hasVariablePrice ? " + options à confirmer" : ""}`,
    `Nom : ${orderName.value || "Non renseigné"}`,
    `Téléphone : ${orderPhone.value || "Non renseigné"}`,
    `Mode : ${orderMode.value}`,
    `Précisions : ${orderNotes.value || "Aucune"}`,
  ];

  return lines.join("\n");
}

function renderCart() {
  const { count, knownTotal, hasVariablePrice } = getCartSummary();

  cartCount.textContent = `${count} article${count > 1 ? "s" : ""}`;
  cartTotal.textContent = `${formatMoney(knownTotal)}${hasVariablePrice ? " +" : ""}`;

  if (!cart.length) {
    cartList.innerHTML = '<p class="cart-empty">Ajoutez vos plats depuis le menu pour préparer votre commande.</p>';
    sendOrderButton.classList.add("disabled");
    sendOrderButton.setAttribute("aria-disabled", "true");
    sendOrderButton.href = "#";
    return;
  }

  cartList.innerHTML = cart
    .map(
      (item) => `
        <article class="cart-item">
          <div>
            <h4>${item.title}</h4>
            <p>${item.priceText}</p>
          </div>
          <div class="cart-controls">
            <button type="button" data-cart-key="${escapeAttribute(item.key)}" data-cart-change="-1" aria-label="Retirer ${item.title}">−</button>
            <strong>${item.quantity}</strong>
            <button type="button" data-cart-key="${escapeAttribute(item.key)}" data-cart-change="1" aria-label="Ajouter ${item.title}">+</button>
          </div>
        </article>
      `
    )
    .join("");

  sendOrderButton.classList.remove("disabled");
  sendOrderButton.setAttribute("aria-disabled", "false");
  sendOrderButton.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(buildOrderMessage())}`;
}

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.classList.toggle("active", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  document.body.classList.toggle("nav-open", isOpen);
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-open");
  });
});

tabs.forEach((tab) => {
  tab.addEventListener("click", () => filterMenu(tab));
});

filterMenu(document.querySelector(".tab.active"));
renderCart();

menuGrid.addEventListener("click", (event) => {
  const button = event.target.closest(".add-to-cart");

  if (!button) {
    return;
  }

  const card = button.closest(".menu-item");
  const option = card.querySelector(".menu-option");

  addToCart(button.dataset.title, option.value);
  button.textContent = "Ajouté";
  setTimeout(() => {
    button.textContent = "Ajouter";
  }, 1000);
});

cartList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-cart-key]");

  if (!button) {
    return;
  }

  updateCartQuantity(button.dataset.cartKey, Number(button.dataset.cartChange));
});

[orderName, orderPhone, orderMode, orderNotes].forEach((field) => {
  field.addEventListener("input", renderCart);
});

clearCartButton.addEventListener("click", () => {
  cart.splice(0, cart.length);
  renderCart();
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

revealItems.forEach((item) => observer.observe(item));

shareButton.addEventListener("click", async () => {
  const shareData = {
    title: "EMLYS Restaurant",
    text: "Découvrez EMLYS Restaurant à 1200 Logements, Ouagadougou.",
    url: "https://www.google.com/maps/place/EMLYS+Restaurant/@12.3687864,-1.4997678,17z/data=!4m16!1m9!3m8!1s0xe2ebf0f39d9223d:0xd091743a9c55cd84!2sEMLYS+Restaurant!8m2!3d12.3687812!4d-1.4971929",
  };

  if (navigator.share) {
    await navigator.share(shareData);
    return;
  }

  await navigator.clipboard.writeText(shareData.url);
  shareButton.textContent = "Lien copié";
  setTimeout(() => {
    shareButton.textContent = "Partager";
  }, 1800);
});

forms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const button = form.querySelector("button[type='submit']");
    const originalLabel = button.textContent;

    button.textContent = "Envoyé";
    form.reset();

    setTimeout(() => {
      button.textContent = originalLabel;
    }, 2000);
  });
});
