import APIkeys from "API.js";

function searchMeetups(searchString) {
  fetch(
    `https://www.eventbriteapi.com/v3/events/search/?q=${searchString}$location.address=nashville&token=${
      APIkeys.meetups
    }`,
    {
      headers: {
        Accept: "application/json"
      }
    }
  )
    .then(response => response.json())
    .then(/*  do Something  */);
}
