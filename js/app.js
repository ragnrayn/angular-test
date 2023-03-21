const searchInput = document.querySelector(".search-form__input");
const searchList = document.querySelector(".search-form__list");
const searchForm = document.querySelector(".search-form");

searchInput.addEventListener("input", () => {
  if (searchInput.value.length > 0) {
    searchList.classList.add("active");
    searchInput.classList.add("active");
  } else {
    searchList.classList.remove("active");
    searchInput.classList.remove("active");
  }
});
