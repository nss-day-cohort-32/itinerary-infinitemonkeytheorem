import APIkeys from "../../../env/apiKeys.js";
import { buildCard } from "./cardBuilder";

// Set up to only search in the nashville area / Can easily change to make radius set to different city by making dma ID change functionality
module.exports.searchConcerts = function(input) {
  fetch(
    `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${input}&classificationName=music&dmaId=343&apikey=${
      APIkeys.concerts
    }`
  )
    .then(events => events.json())
    .then(event => {
      event._embedded.events.forEach(item => {
        let html = {
          type: "concerts" /* parks, restaurants, etc. */,
          title: `${item.name}`,
          subtitle: "",
          image: {
            url: `${item.images[0].url}`,
            alt: `${item.name}`
          },
          startTime: `${item.dates.start.localTime}`,
          startDate: `${item.dates.start.localDate}` /* dateTime object */,
          location: `${item._embedded.venues[0].name}`,
          extendedContent: "Whatever Content You Decide to Include", // innerHTML content
          id: `${item.id}` /* make sure to pass unique values for each card */
        };

        console.log(`${item.name}`, item);
        let concertCardHTML = buildCard(html);
        const cardContent = document.querySelector("#root");
        cardContent.innerHTML += concertCardHTML;
      });
    });
};
// searchConcerts("alternative");
