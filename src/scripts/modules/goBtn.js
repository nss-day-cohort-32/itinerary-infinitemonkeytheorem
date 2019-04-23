import { searchMeetups } from "./API-meetups";

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
      console.log("call parks function with string: ", searchString);
      // call parks function
      break;
    case "restaurants":
      console.log("call restaurants function with string: ", searchString);
      // call restaurants function
      break;
    case "meetups":
      searchMeetups(searchString);

      console.log("call meetups function with string: ", searchString);
      // call meetups function
      break;
    case "concerts":
      searchText = encodeURIComponent(searchText); // replaces " " with "%20", etc.
      console.log("call concerts function with string: ", searchString);
      // call concerts function
      break;
  }
}
