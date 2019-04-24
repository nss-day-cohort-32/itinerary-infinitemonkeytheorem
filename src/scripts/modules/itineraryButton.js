// How do I select the button if it hasn't been inserted to the dom yet? Current form is clickable from anywhere in the root div.
document.querySelector("#root").addEventListener("click", addToItinerary);

let itinerary = {};

function addToItinerary(event) {
  if (event.srcElement.nodeName === "BUTTON") {
    // select necessary card values
    let itineraryItem = event.target.parentElement.closest(".mdc-card").querySelector("#cardTitle").innerHTML;
    let itineraryItemLocale = event.target.parentElement.closest(".mdc-card").querySelector("#cardLocation").innerHTML;
    let itineraryItemType = event.target.parentElement.closest(".mdc-card").id.split("--")[1].split("-")[0];
    console.log(itineraryItemType);

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
    let databaseListing = `${itineraryItem} at ${itineraryItemLocale}`;

    // append new element to appended div element
    myItineraryContent.appendChild(listing);

    switch (itineraryItemType) {
      case "Park":
        itinerary.Park = databaseListing;
        // put in itinerary.parks
        break;
      case "Concert":
        itinerary.Concert = databaseListing;
        break;
      case "Meetup":
        itinerary.Meetup = databaseListing;
        // put in meetup
        break;
      case "Restaurant":
        itinerary.Restaurant = databaseListing;
        // put in restaurant
        break;
    };
    console.log("itinerary", itinerary);
    console.log("itinerary from db", itinerary);

    fetch("http://localhost:8088/Itinerary", {
      method: "POST",
      body: JSON.stringify(itinerary)
    });
  }
};