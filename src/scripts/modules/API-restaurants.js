import APIkeys from "../../../env/apiKeys.js";
const zAPI = {
    getFood: function () {
        return fetch("https://developers.zomato.com/api/v2.1/search?city_id=1138", {
        headers: {
            "Accept": "application/json",
            // "user-key": "817381c0888ad5f71232cde8acc4ab17"
            "user-key": `${APIkeys.restaurants}`
        } })
    .then(r => r.json());
    }
};
const foodHTML = (restaurant) => {
    return `
        <div class="card">
        <h2>${restaurant.name}</h2>
        <p>${restaurant}</p>
        <p>${restaurant}</p>
        <p>${restaurant}</p>
        </div>
    `;
};
// const addFoodToDOM = (array) => {
//     array.forEach(element => {
//         const restaurant = foodHTML(element);
//         const container = document.querySelector(".container");
//         const foodDiv = document.createElement("div");
//         foodDiv.innerHTML = "<p>Hello</p>";
//         container.appendChild(foodDiv);
//     });
// };
const addFoodToDOM = (object) => {
    for (var key in object) {
        const restaurant = foodHTML(key);
        console.log("restaurant", restaurant);
        const container = document.querySelector(".container");
        const foodDiv = document.createElement("div");
        foodDiv.innerHTML = "<p>Hello</p>";
        container.appendChild(foodDiv);
    };
};
zAPI.getFood().then(restaurant => addFoodToDOM(restaurant));