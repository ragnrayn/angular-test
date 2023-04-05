async function fetchMeals(latitude, longitude) {
  const body = {
    latitude,
    longitude,
    radius: 30000,
  };
  try {
    const response = await fetch(
      "https://g2tlvj30j0.execute-api.eu-central-1.amazonaws.com/dishes/radius",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(body),
      }
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

function searchMealsFromLocation() {
  const locationBtn = document.querySelector(".icon-location");
  locationBtn.addEventListener("click", () => {
    const overlay = document.querySelector(".overlay");
    const loader = document.querySelector(".loader");
    setTimeout(() => {
      overlay.classList.add("active");
      loader.classList.add("active");
    }, 500);
    navigator.geolocation.getCurrentPosition(async (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const meals = await fetchMeals(latitude, longitude);
      localStorage.setItem("meals", JSON.stringify(meals));
      window.location.replace("/search.html");
    });
  });
}

searchMealsFromLocation();
