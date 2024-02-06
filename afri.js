const cardItems = [
  {
    id: 0,
    quote: "/images/quote.png",
    backquote: "./images/backquote.png",
    title:
      "Africash is a really good app and it has made my life easier. I can now order as many things as I want to from Ghana and have them delivered to my doorstep. It's safe, easy and secure.",
    image: "/images/Ellipse 199 (1).png",
    name: "laura koffi",
    position: "Entrepreneur",
  },
  {
    id: 1,
    quote: "/images/quote.png",
    backquote: "./images/backquote.png",
    title:
      "With Africash, it's so easy to buy goods in Africa and have them sent directly to my home. It’s my go to app.",
    image: "/images/Ellipse 200.png",
    name: "lamin njie",
    position: "student",
  },
  {
    id: 2,
    quote: "/images/quote.png",
    backquote: "./images/backquote.png",
    title:
      "The service is amazing and i will be using it again in the future. Thank you Africash for making international trading easier with your service.",
    image: "/images/Ellipse 200 (1).png",
    name: "ayobami sobowale",
    position: "teacher",
  },
];

function createCard(item) {
  //   const cardItems = document.getElementById("cardItems");
  const card = document.createElement("div");

  card.className = "card-container";

  //   first child div
  const firstChildDiv = document.createElement("div");
  firstChildDiv.className = "quote-container";

  firstChildDiv.innerHTML = `
  <img src="${item.quote}" alt=${item.name} />
    <h5> ${item.title} </h5>
    <img src="${item.backquote}" alt=${item.name} />
    
    `;
  card.appendChild(firstChildDiv);

  const secondChildDiv = document.createElement("div");
  secondChildDiv.className = "profile-container";

  secondChildDiv.innerHTML = `
  <img src="${item.image}" alt=${item.name} />

   
`;
  card.appendChild(secondChildDiv);

  const thirdChildDiv = document.createElement("div");
  thirdChildDiv.className = "profile-content";

  thirdChildDiv.innerHTML = `
  <h4>${item.name}</h4>
    <h6>${item.position}</h6>
  `;
  secondChildDiv.appendChild(thirdChildDiv);

  return card;
}

const cardItemContainer = document.getElementById("cardItems");

cardItems.forEach((item) => {
  const card = createCard(item);
  cardItemContainer.appendChild(card);
});
