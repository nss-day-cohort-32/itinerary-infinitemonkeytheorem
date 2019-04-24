function showItinerary() {
  let itineraryBtn = document.querySelector("#itineraryBtn");
  itineraryBtn.addEventListener("click", event => {
    console.log("itinerary button clicked");
    let itinerary = document.querySelector("#itineraryContainer");
    itinerary.classList.toggle("itinerary-hide");
    document.querySelector("#root").innerHTML = "";
  });
}

showItinerary();
