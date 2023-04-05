const popupOverlay = document.querySelector(".overlay-popup");
const popup = document.querySelector(".popup");
const popupClose = document.querySelector(".popup__close");
const startBtn = document.querySelector(".start");

startBtn.addEventListener("click", () => {
  popupOverlay.classList.add("active");
  popup.classList.add("active");
});

popupClose.addEventListener("click", () => {
  popupOverlay.classList.remove("active");
  popup.classList.remove("active");
});
