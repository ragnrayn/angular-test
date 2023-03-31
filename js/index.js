function getUserAddress() {
  const locationBtn = document.querySelector(".icon-location");
  locationBtn.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const addressResponse = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=pk.eyJ1IjoiZGltYTgyNjMiLCJhIjoiY2xmdTg2MGxqMDhkNTNucXo0aG9nZHp3eiJ9.TliPZdzmdvc_kruaO4-7cA`
      );
      const addressData = await addressResponse.json();
      let fullAddress = addressData.features[0].place_name;
      fullAddress = fullAddress.split(", ");
      fullAddress.splice(2, 1);
      const address = `${fullAddress[0]}, ${fullAddress[1]
        .split(" ")
        .slice(1)}, ${fullAddress[2]}`;

      searchInput.value = address;
      localStorage.setItem("address", address);
    });
  });
}

getUserAddress();

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

function searchMeals() {
  const searchMealsForm = document.querySelector("#search-meals");

  searchMealsForm.addEventListener("submit", (e) => {
    e.preventDefault();
    navigator.geolocation.getCurrentPosition(async (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const meals = await fetchMeals(latitude, longitude);
      searchMealsForm.reset();
      localStorage.setItem("meals", JSON.stringify(meals));
      window.location.replace("/search.html");
    });
  });
}

searchMeals();
