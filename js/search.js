function renderMeals() {
  const meals = JSON.parse(localStorage.getItem("meals"));
  const promoWrapper = document.querySelector(".promo__meals");

  const template = meals
    .map(({ title, price }) => {
      return `
      <div class="meal">
        <img class="meal__img" src="images/meals/burger.jpg" alt="burger" />
        <p class="meal__restaurant">Ресторан</p>
        <h3 class="meal__title">${title}</h3>
        <p class="meal__descr">
          Булочка солодова, овочі гриль (цукіні, баклажан, червона цибуля, болгарський перець), Моцарела, соус BBQ, салат Бостон, свіжі томати. Подається з картопляними діпами та салатом, але, на жаль, тимчасово без додаткових соусів
        </p>
        <div class="meal__footer">
          <p class="meal__price">${price} ₴</p>
          <button class="meal__btn">
            <span class="icon-Button">
              <span class="path1"></span>
              <span class="path2"></span>
            </span>
          </button>
        </div>
        <div class="meal__delivery">50₴</div>
      </div>
    `;
    })
    .join("");
  promoWrapper.innerHTML = template;
}

renderMeals();

const searchForm = document.querySelector(".search-form");
const testBtn = document.querySelector(".btn.btn--orange");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

testBtn.addEventListener("click", () => {
  window.location.replace("/meal.html");
});
