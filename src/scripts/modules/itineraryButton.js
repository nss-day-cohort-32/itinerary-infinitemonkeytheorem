// How do I select the button if it hasn't been inserted to the dom yet? Current form is clickable from anywhere in the root div.
document.querySelector("#root").addEventListener("click", addToItinerary);

function addToItinerary(event) {
  // select necessary card values
  let itineraryItem = event.target.parentElement.closest(".mdc-card").querySelector("#cardTitle").innerHTML;
  let itineraryItemLocale = event.target.parentElement.closest(".mdc-card").querySelector("#eventLocation").innerHTML;
  let itineraryItemType = event.target.parentElement.closest(".mdc-card").id.split("--")[1].split("-")[0];

  // select necessary dom elements
  let myItinerary = document.querySelector("#itinerary");
  let searchItems = document.querySelector("#root");

  // create div element to contain selected events
  let myItineraryContent = document.createElement("div");

  // clear all search results on selecting card
  searchItems.innerHTML = "";

  // appends new div into itinerary container
  myItinerary.appendChild(myItineraryContent);

  // sets event item html format
  let listing = document.createTextNode(`${itineraryItemType}: ${itineraryItem} at ${itineraryItemLocale}`);

  // append new element to appended div element
  myItineraryContent.appendChild(listing);
};

// This function will need to be alter to add items to json database as well as use a PUT method to replace old cards with new selects

// fetch(`http://localhost:8088/resource/${id}`, {
//     method: "PUT",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify(objectContainingNewProperties)
// })
// .then(res => res.json());

// First focus will be getting everyone connected at MVP. Pull results and successfully post to DOM.
// Basic style for cards
// Build itinerary and persist in json database
 // Build a PUT function that will replace items in the itinerary with new selections
 // Add the ability to save an itinerary and create a new itinerary
 // Add ability to view different itineraries
 // Add nav bar to show desired fields
// Further styling finalizations
// Finialize README.md and stress test app
// If we have time we will work on other stretch goals
