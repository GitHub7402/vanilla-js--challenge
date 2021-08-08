const imgs = ["0.jpg", "1.jpg", "2.jpg", "3.png", "4.jpg", "5.jpg"];
const chosenImg = imgs[Math.floor(Math.random() * imgs.length)];

const div = document.createElement("div");
div.id = "background";
const img = document.createElement("img");
img.src = `imgs/${chosenImg}`;
img.id = "background-img"
img.classList.add("hidden");

div.appendChild(img);
document.body.appendChild(div);