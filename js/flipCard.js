function flipCard() {
  const card = document.querySelector(".card");
  const flipBtn = document.querySelector(".card-flip");
  const cardOptions = document.querySelector(".card__options");

  flipBtn.addEventListener("click", () => {
    card.classList.toggle("flip");
    setTimeout(() => {
      cardOptions.classList.toggle("visible");
    }, 100);
  });
}

flipCard();
