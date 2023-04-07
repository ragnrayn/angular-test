function flipCard() {
  const card = document.querySelector(".card");
  const flipBtn = document.querySelector(".card-flip");

  flipBtn.addEventListener("click", () => {
    card.classList.toggle("flip");
  });
}

flipCard();
