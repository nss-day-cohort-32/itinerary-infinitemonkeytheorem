import APIkeys from "../../../env/apiKeys";
import { buildCard } from "./cardBuilder";

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

console.log(
  buildCard({
    type: "" /* parks, restaurants, etc.  */,
    title: "",
    subtitle: "",
    image: {
      url: "",
      alt: ""
    },
    startTime: "" /* dateTime object */,
    location: "",
    extendedContent: "", // innerHTML content
    id: "" /* make sure to pass unique values for each card */
  })
);
