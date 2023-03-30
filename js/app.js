const searchInput = document.querySelector(".search-form__input");
const searchList = document.querySelector(".search-form__list");
const searchLocation = document.querySelector(".search-form__icon");
const searchClose = document.querySelector(".search-form__close");
const address = document.querySelector(".address");

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

//////////////

if (document.body.classList.contains("search-page")) {
  if (document.documentElement.clientWidth <= 600) {
    searchInput.setAttribute("placeholder", "Що хочеться....");
  }
}
