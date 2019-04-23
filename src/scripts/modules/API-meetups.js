import APIkeys from "../../../env/apiKeys";
import { buildCard } from "./cardBuilder";

module.exports.searchMeetups = function(searchString) {
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
    .then(eventObject => {
      // Do something
      console.log(eventObject.events[2].name.html);

      let event = eventObject.events[0];
      let html = buildCard({
        type: "meetups" /* parks, restaurants, etc.  */,
        title: event.name.html,
        subtitle: event.summary,
        image: {
          url: event.logo.url,
          alt: event.name.text
        },
        startTime: event.start.local /* dateTime object */,
        location: "",
        extendedContent: "", // innerHTML content
        id: "" /* make sure to pass unique values for each card */
      });
      document.querySelector("#root").innerHTML = html;
      console.log(eventObject);
    });
};

// console.log(
//   buildCard({

//   })
// );
