import { searchMeetups } from "./API-meetups";
import { searchConcerts } from "./API-concerts";
import { searchPark } from "./api-park";
import { searchRestaurants } from "./API-restaurants";

createGoListener();

function createGoListener() {
  const goBtn = document.querySelector("#go");
  goBtn.addEventListener("click", search);
}

function search(event) {
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
