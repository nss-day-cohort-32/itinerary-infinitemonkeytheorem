import { searchMeetups } from "./API-meetups";
import { searchPark } from "./api-park";
import { searchRestaurants } from "./API-restaurants";

createGoListener();

function createGoListener() {
  const goBtn = document.querySelector("#go");
  goBtn.addEventListener("click", search);
}

function search(event) {
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
      searchText = encodeURIComponent(searchText); // replaces " " with "%20", etc.
      searchMeetups(searchString);
      break;
    case "concerts":
      searchText = encodeURIComponent(searchText); // replaces " " with "%20", etc.

      break;
  }
}
