import APIkeys from "../../../env/apiKeys.js";
import { buildCard } from "./cardBuilder";

let idIndex = 0;

module.exports.searchRestaurants = function (input) {
    return fetch(`https://developers.zomato.com/api/v2.1/search?q=${input}&city_id=1138`, {
    headers: {
        "Accept": "application/json",
        "user-key": `${APIkeys.restaurants}`,
    }
})
.then(r => r.json())
.then(results => {
    results.restaurants.forEach(element => {

        idIndex++;

        let cardHTML = {
            type: "Restaurant",
            title: `${element.restaurant.name}`,
            subtitle: "",
            image: {
                url: `${element.restaurant.url}`,
                alt: ""
            },
            startTime: "" /* dateTime object */,
            location: `${element.restaurant.location.address}`,
            extendedContent: `
                <p><a href="${element.restaurant.url}" target="_blank">Website</a></p>
                <p>Price Range: ${element.restaurant.price_range}/4</p>
                <p>User Rating: ${element.restaurant.user_rating.aggregate_rating}/5</p>
            `, // innerHTML content
            id: `${idIndex}` /* make sure to pass unique values for each card */
            };

        const newCard = buildCard(cardHTML);

        const root = document.querySelector("#root");
        root.innerHTML += newCard;
    });
    });
};