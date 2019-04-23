console.log("Hello, World!");
import APIkeys from "../../../env/apiKeys.js";

// concertCard = (concert) => {
//   return `<div class="card-full">
//             <div class="card-image">
//                 <img src="#" alt="venueImage">
//             </div>
//             <div class="card-content">
//                 <h1>${item.name}</h1>
//                 <h3>${item.date}</h3>
//                 <h3>${item._embedded.venues[0].name}</h3>
//             </div>
//             <div class="card-contentExtended">
//                 <p>Some Content</p>
//             </div>
//           </div>`
// };

// Set up to only search in the nashville area / Can easily change to make radius set to different city by making dma ID change functionality
function searchConcerts(input) {
  fetch(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${input}&classificationName=music&dmaId=343&apikey=${APIkeys.concerts}`)
    .then(events => events.json())
    .then(event => {
      event._embedded.events.forEach(item => {
        let html = {
          type: "Concert",  /* parks, restaurants, etc.  */
          title: `${item.name}`,
          subtitle: "",
          image: {
            url: `${item.images[0]}`,
            alt: `${item.name}`
          },
          startTime: `${item.dates.start.localDate}`,  /* dateTime object */
          location: `${item._embedded.venues[0].name}`,
          extendedContent: "#", // innerHTML content
          id: `${item.id}`  /* make sure to pass unique values for each card */
        };
        console.log(`${item.name}`, html);
      });
    });
};
searchConcerts("hip hop");

// const concertCard = {
//   type: "Concert",  /* parks, restaurants, etc.  */
//   title: `${item.name}`,
//   subtitle: "",
//   image: {
//     url: `${item.image[0]}`,
//     alt: `${item.image.name}`
//   },
//   startTime: `${item.dates.start.localDate}`,  /* dateTime object */
//   location: `${item._embedded.venues[0].name}`,
//   extendedContent: "#", // innerHTML content
//   id: `${item.id}`  /* make sure to pass unique values for each card */
// };

// const inputValue = document.querySelector("#concertsBtn").addEventListener("click", function(event){
//  return document.querySelector("inputField").value;
// });
// searchConcerts(inputValue);