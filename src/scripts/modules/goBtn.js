import { searchMeetups } from "./API-meetups";
import { searchConcerts } from "./API-concerts";
import { searchPark } from "./api-park";
import { searchRestaurants } from "./API-restaurants";

var splash = 1;
createGoListener();

function createGoListener() {
  const goBtn = document.querySelector("#go");
  goBtn.addEventListener("click", search);
}

function search(event) {
  if (splash === 1) {
    splash = 0;
    let header = document.querySelector("header");
    header.classList.replace("splash", "splash-gone");
    let search = document.querySelector("#search");
    search.classList.replace("search-splashscreen", "search");
  }
  document.querySelector("#root").innerHTML = "";
  let searchText = document.querySelector("#searchText").value;
  let searchType = document.querySelector("#searchType").value;
  switchboard(searchType, searchText);
}

function switchboard(apiToSearch, searchString) {
  switch (apiToSearch) {
    case "parks":
      searchPark(searchString);
      break;
    case "restaurants":
      searchRestaurants(searchString);
      break;
    case "meetups":
      searchString = encodeURIComponent(searchString); // replaces " " with "%20", etc.
      searchMeetups(searchString);
      break;
    case "concerts":
      //searchString = encodeURIComponent(searchString); // replaces " " with "%20", etc.
      searchConcerts(searchString);
      break;
  }
}
