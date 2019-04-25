import { extendCard } from "./extendCard";

document.querySelector("#root").addEventListener("click", buttonHandler);

let itinerary = {};

function buttonHandler(event) {
  let buttonType = event.target.id.slice(8, 11);
  if (buttonType === "add") {
    addToItinerary(event);
  } else if (buttonType === "ext") {
    extendCard(event);
  }
}
function addToDatabase(url = "", data = {}) {
  return fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },
    redirect: "follow",
    referrer: "no-referrer",
    body: JSON.stringify(data)
  }).then(response => response.json());
}

function addToItinerary(event) {
  // select necessary card values
  let cardDiv = event.target.parentElement.closest(".card");
  let itineraryItem = cardDiv.querySelector("#cardTitle").innerHTML;
  let itineraryItemLocale = cardDiv.querySelector("#eventLocation").innerHTML;
  let itineraryItemType = cardDiv.id.split("--")[1].split("-")[0];
  let itineraryDateTime = cardDiv.querySelector(".card__meta").innerHTML;

  // select necessary dom elements
  let myItinerary = document.querySelector("#itinerary");
  let searchItems = document.querySelector("#root");

  let existingDiv = document.getElementById(`itinerary-${itineraryItemType}`);
  if (existingDiv) existingDiv.remove();

  // create div element to contain selected events
  let myItineraryContent = document.createElement("div");
  myItineraryContent.id = `itinerary-${itineraryItemType}`;

  // appends new div into itinerary container
  myItinerary.appendChild(myItineraryContent);
  console.log(itineraryDateTime);

  // clear all search results on selecting card
  searchItems.innerHTML = "";

  // sets event item html format
  {
    //heading (type of event)
    let heading = document.createElement("h3");
    heading.innerHTML = itineraryItemType;
    myItineraryContent.appendChild(heading);

    //Event name
    let eventName = document.createElement("p");
    eventName.innerHTML = itineraryItem;
    myItineraryContent.appendChild(eventName);

    //Event location
    let eventLocation = document.createElement("p");
    eventLocation.innerHTML = itineraryItemLocale;
    myItineraryContent.appendChild(eventLocation);

    //If event has a date/time, add to itinerary
    // The /\S/ is regexp to check for any text characters in the element
    if (/\S/.test(itineraryDateTime)) {
      let eventDate = document.createElement("p");
      eventDate.innerHTML = itineraryDateTime;
      myItineraryContent.appendChild(eventDate);
    }
  }

  // Build database object
  let databaseListing = `${itineraryItem} at ${itineraryItemLocale}`;

  switch (itineraryItemType) {
    case "Park":
      itinerary.Park = databaseListing;
      break;
    case "Concert":
      itinerary.Concert = databaseListing;
      break;
    case "Meetup":
      itinerary.Meetup = databaseListing;
      break;
    case "Restaurant":
      itinerary.Restaurant = databaseListing;
      break;
  }

  addToDatabase("http://localhost:8088/Itinerary", itinerary);
  document
    .querySelector("#itineraryContainer")
    .classList.remove("itinerary-hide");

  // fetch("http://localhost:8088/Itinerary", {
  //   method: "GET",
  //   body: "",
  // });
}
