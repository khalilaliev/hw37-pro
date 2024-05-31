"use strict";

const images = [
  {
    id: 1,
    title: "Angular",
    src: "./images/angular.jpeg",
  },
  {
    id: 2,
    title: "Java",
    src: "./images/java.jpeg",
  },
  {
    id: 3,
    title: "JavaScript-TypeScript",
    src: "./images/js-ts.png",
  },
  {
    id: 4,
    title: "JavaScript",
    src: "./images/js.jpeg",
  },
  {
    id: 5,
    title: "NodeJs",
    src: "./images/node-js.jpeg",
  },
  {
    id: 6,
    title: "React",
    src: "./images/react.jpeg",
  },
  {
    id: 7,
    title: "VueJs",
    src: "./images/vue-js.png",
  },
];

const box = document.getElementById("box");
const random = document.getElementById("random");

random.addEventListener("click", () => {
  box.innerHTML = "";
  const randomImage = images[Math.floor(Math.random() * images.length)];

  const img = document.createElement("img");
  const h1 = document.createElement("h1");
  img.classList.add("image");
  img.src = randomImage.src;
  const title = (img.alt = randomImage.title);
  h1.innerText = title;
  box.appendChild(h1);
  box.appendChild(img);
});
