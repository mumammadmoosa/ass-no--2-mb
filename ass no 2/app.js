const data = [

    {
    "id": 4,
    "title": "Hoodie",
    "price": "$205",
    "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    "image_url": "https://i.imgur.com/R2PN9Wq.jpeg"
    },
    {
    "id": 7,
    "title": "Trouser",
    "price": "$743",
    "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    "image_url": "https://i.imgur.com/mp3rUty.jpeg"
    },
    {
    "id": 9,
    "title": "blue Leather Cap",
    "price": "$808",
    "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    "image_url": "https://i.imgur.com/R3iobJA.jpeg"
    },
    {
    "id": 11,
    "title": "Red Cotton Cap",
    "price": "$382",
    "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    "image_url": "https://i.imgur.com/cBuLvBi.jpeg"
    },
    {
    "id": 12,
    "title": "Black Cotton Cap",
    "price": "$30",
    "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    "image_url": "https://i.imgur.com/KeqG6r4.jpeg"
    }

]
data.forEach((element,i) => {

const main = document.querySelector(".main");
console.log(main);


const card = document.createElement('div');
// card.list = 'card';

const showCard = `

<div class="card" style="width: 18rem;">
<img src="${data[i].image_url}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${data[i].title}</h5>
      <p class="card-text">${data[i].description}</p>
      <h5 class="card-price">${data[i].price}</h5>
      <a href="#" class="btn btn-primary">Buy Now</a>
    </div>
</div>

`

card.innerHTML = showCard;
main.appendChild(card);

});