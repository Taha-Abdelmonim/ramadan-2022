let box = document.querySelector(".content"),
  deg = 0,
  cone1 = document.getElementById("cone"),
  cone2 = document.querySelector(".cone2");

let shadow = document.querySelector(".st0");
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn1");
let btn3 = document.querySelector(".btn1");
let stars = document.querySelectorAll(".stars div");

setInterval(() => {
  box.style.transform = `rotateY(${deg}deg)`;
  deg += 90;
}, 3000);

function light1() {
  const units = [];

  for (i = 0; i < 150; i++) {
    units[i] = document.createElement("div");
    units[i].classList.add("unit", "pos-center");
    units[i].style.cssText = `
        transform: rotateY(${i * (360 / 150)}deg) translate3D(-50%, -50%, 50px);
        animation-delay: ${i * 0.1}s;
        `;

    cone1.appendChild(units[i]);
  }
}


function light2() {
const units2 = [];

for (i = 0; i < 150; i++) {
  units2[i] = document.createElement("div");
  units2[i].classList.add("unit2", "pos-center");
  units2[i].style.cssText = `
        transform: rotateY(${i * (360 / 150)}deg) translate3D(-50%, -50%, 50px);
        animation-delay: ${i * 0.1}s;
        `;

  cone2.appendChild(units2[i]);
}
}
btn1.onclick = () => {
  stars.forEach((ele) => {
    shadow.classList.add("open");
    ele.classList.add("open");
  });
};
