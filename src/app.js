import "bootstrap";
import "./style.css";

window.onload = () => {
  let randomSuit = pickSuit();

  document.querySelector(".topSuit").classList.add(randomSuit);
  document.querySelector(".bottomSuit").classList.add(randomSuit);

  document.querySelector(".topSuit").innerHTML = randomSuit;
  document.querySelector(".cardNumber").innerHTML = pickCardNumber();
  document.querySelector(".bottomSuit").innerHTML = randomSuit;
};

let pickCardNumber = () => {
  let cardNumber = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let randomCardNumber = Math.floor(Math.random() * cardNumber.length);
  return cardNumber[randomCardNumber];
};

let pickSuit = () => {
  let suit = ["♥", "♣", "♦", "♠"];
  let randomSuit = Math.floor(Math.random() * suit.length);
  return suit[randomSuit];
};
