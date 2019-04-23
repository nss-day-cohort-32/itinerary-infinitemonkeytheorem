import APIkeys from "../../../env/apiKeys.js";
// const zAPI = {
//     getFood: function () {
//         return fetch("https://developers.zomato.com/api/v2.1/search?city_id=1138", {
//         headers: {
//             "Accept": "application/json",
//             // "user-key": "817381c0888ad5f71232cde8acc4ab17"
//             "user-key": `${APIkeys.restaurants}`
//         } })
//     .then(r => r.json())
//     .then(results => {
//         results.restaurants.forEach(element => {
//             console.log("name", element.restaurant.name);
//             console.log("cuisines", element.restaurant.cuisines);
//         });
//     });
//     }
// };
// zAPI.getFood();

const zAPI = {
    getFood: function (cuisine) {
        return fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&count=5&cuisines=${cuisine}`, {
        headers: {
            "Accept": "application/json",
            // "user-key": "817381c0888ad5f71232cde8acc4ab17"
            "user-key": `${APIkeys.restaurants}`
        } })
    .then(r => r.json())
    .then(results => {
        results.restaurants.forEach(element => {
            console.log("name", element.restaurant.name);
            console.log("cuisines", element.restaurant.cuisines);
        });
    });
    }
};
zAPI.getFood();

zAPI.getFood(cuisine);

<select>
  <option value="mexican">Mexican</option>
  <option value="burger">Burger</option>
  <option value="american">American</option>
  <option value="chinese">Chinese</option>
</select>;