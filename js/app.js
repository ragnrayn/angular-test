const searchInput = document.querySelector(".search-form__input");
const searchList = document.querySelector(".search-form__list");
const searchLocation = document.querySelector(".search-form__location");
const searchClose = document.querySelector(".search-form__close");

searchInput.addEventListener("input", onInputHandler);

searchClose.addEventListener("click", () => {
  searchInput.value = "";
  onInputHandler();
});

function onInputHandler() {
  if (searchInput.value.length > 0) {
    searchList.classList.add("active");
    searchLocation.classList.add("hidden");
    searchClose.classList.add("visible");
  } else {
    searchList.classList.remove("active");
    searchLocation.classList.remove("hidden");
    searchClose.classList.remove("visible");
  }
}
