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
        console.log(`${item.name}`, item);
      });
    });
};
searchConcerts("hip hop");

// const inputValue = document.querySelector("#concertsBtn").addEventListener("click", function(event){
//  return document.querySelector("inputField").value;
// });
// searchConcerts(inputValue);