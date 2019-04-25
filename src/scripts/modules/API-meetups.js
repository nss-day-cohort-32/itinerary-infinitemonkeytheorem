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
        let dateTime = new Date(event.start.local);
        let day = dateTime.toLocaleString("en-us", { weekday: "long" });
        const month = dateTime.toLocaleString("en-us", { month: "long" });
        const time = dateTime.toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true
        });
        let cardObj = {
          type: "Meetup" /* parks, restaurants, etc.  */,
          title: event.name.html,
          subtitle: event.summary,
          image: {
            url: img,
            alt: event.name.text
          },
          startDate: `${day}, ${month} ${dateTime.getDate()}`,
          startTime: time /* dateTime object */,
          location: event.venue.address.localized_address_display,
          extendedContent: event.description.html, // innerHTML content
          id: index /* make sure to pass unique values for each card */
        };
        console.log("DateTime", dateTime);
        let html = buildCard(cardObj);
        console.log(html);
        document.querySelector("#root").innerHTML += html;
      });
    });
};
