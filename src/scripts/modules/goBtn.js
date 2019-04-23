<<<<<<< HEAD
import { searchConcerts } from "./API-concerts";
=======
import { searchPark } from "./api-park";
import { searchRestaurants } from "./API-restaurants";
>>>>>>> master

createGoListener();

function createGoListener() {
  const goBtn = document.querySelector("#go");
  goBtn.addEventListener("click", search);
}

function search(event) {
  let searchText = document.querySelector("#searchText").value;
  let searchType = document.querySelector("#searchType").value;
  searchText = encodeURIComponent(searchText); // replaces " " with "%20", etc.
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
      // call meetups function
      break;
    case "concerts":
<<<<<<< HEAD
      console.log(`call concerts function with string: ${searchString}`, searchString, searchConcerts(searchString));
=======
>>>>>>> master
      // call concerts function
      break;
  }
}
