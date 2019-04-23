import APIkeys from "../../../env/apiKeys";

function searchMeetups(searchString) {
  return fetch(
    `https://www.eventbriteapi.com/v3/events/search/?q=${searchString}$location.address=nashville&token=${
      APIkeys.meetups
    }`,
    {
      headers: {
        Accept: "application/json"
      }
    }
  ).then(response => response.json());
}



