var geoBtn = $("#geoFinder");

geoBtn.on("click", async function getIP() {
  console.log("--------------geoFinder Response-------------");

  const response = await fetch("https://geo-finder.p.rapidapi.com/ip", {
    method: "GET",
    headers: {
      "x-rapidapi-key": "1a91b93e61msh6131a42b408f76fp105bbbjsn448d9b88393b",
      "x-rapidapi-host": "geo-finder.p.rapidapi.com",
    },
  });
  const data = await response.blob();
  console.log(data);

  console.log("--------------geoFinder Response-------------");
});

var navBtn = $("#navBtn");

navBtn.click(function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
    });
  }
});

var getBtn = $("#getter");

getBtn.click(async function getRestaurants() {
  console.log("Restaurants");

  const response = await fetch("https://api.documenu.com/v2/restaurants/search/geo?");
});
