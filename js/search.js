function renderMeals() {
  const meals = JSON.parse(localStorage.getItem("meals"));
  console.log(meals);
  const promoWrapper = document.querySelector(".promo__wrapper");

  const template = meals
    .map(({ title, price }) => {
      return `
      <div>
        <h3>${title}</h3>
        <p>${price} грн</p>
      </div>
    `;
    })
    .join("");
  promoWrapper.innerHTML = template;
}

renderMeals();
