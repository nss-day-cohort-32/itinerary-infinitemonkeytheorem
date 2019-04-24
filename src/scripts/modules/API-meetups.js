import APIkeys from "../../../env/apiKeys";
import { buildCard } from "./cardBuilder";

module.exports.searchMeetups = function(searchString) {
  let url = `https://www.eventbriteapi.com/v3/events/search/?q=${searchString}`;
  url += `$location.address=nashville&token=${APIkeys.meetups}&expand=venue`;
  fetch(url, {
    headers: {
      Accept: "application/json"
    }
  })
    .then(response => response.json())
    .then(eventObject => {
      console.log(eventObject);
      eventObject.events.forEach((event, index) => {
        let img = "#";
        if (event.logo !== null) {
          img = event.logo.url;
        }
        console.log(`index: ${index} url: ${img}`);

        let cardObj = {
          type: "Meetup" /* parks, restaurants, etc.  */,
          title: event.name.html,
          subtitle: event.summary,
          image: {
            url: img,
            alt: event.name.text
          },
          startTime: event.start.local /* dateTime object */,
          location: event.venue.address.localized_address_display,
          extendedContent: event.description.html, // innerHTML content
          id: index /* make sure to pass unique values for each card */
        };

        let html = buildCard(cardObj);

        document.querySelector("#root").innerHTML += html;
      });
    });
};
