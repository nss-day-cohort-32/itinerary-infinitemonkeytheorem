
fetch("https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&collection_id=1", {
        headers: {
            "Accept": "application/json",
            "user-key": "817381c0888ad5f71232cde8acc4ab17"
        }
    })
    .then(r => r.json())
    .then(results => {
            console.log(results.restaurants);
            console.log("name", results.restaurants.name);
    });


    // name
    // average_cost_for_two
    // cuisines
    // events_url (website)
    // location
    // user_rating --> aggregate_rating

