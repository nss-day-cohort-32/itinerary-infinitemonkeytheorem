
fetch("https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&collection_id=1", {
    headers: {
         "Accept": "application/json",
         "user-key": "817381c0888ad5f71232cde8acc4ab17"
    }
})
    .then(r => r.json())
    .then(results => {
            results.restaurants.forEach(restaurant => {
                console.log("restaurant", restaurant);
                console.log("name", restaurant.r);
            });
    });


    // name
    // average_cost_for_two
    // cuisines
    // events_url (website)
    // location
    // user_rating --> aggregate_rating



    // createCard = (food) => {
    //     return `
    //         <div class="card">
    //             <h2>${food.name}</h2>
    //             <p><strong>Concepts Learned:</strong> ${food.name}</p>
    //             <p><strong>Entry:</strong> ${food.name}</p>
    //             <p><strong>Mood:</strong> ${food.name}</p>
    //         </div>
    //             `
    // }
    
    // addFoodToDOM = (array) => {
    
    //     array.forEach(food => {
    //         const restaurant = createEntry(food);
    //         console.log(restaurant);
    //         // const el = document.querySelector('.entry-container');
    //         // el.innerHTML = entry;
    //     });
    // }
    
    // zAPI.getFood()
    // .then(food => addFoodToDOM(food));