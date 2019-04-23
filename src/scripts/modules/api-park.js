fetch("https://data.nashville.gov/resource/74d7-b74t.json")
    .then(result => result.json())
    .then(parks => {
        console.log(parks);
        parks.map(createHtml);
    });


function createHtml(event) {
    var card = document.createElement("div");
    document.body.appendChild(card);
    card.setAttribute("class", "card-container");

    let chzTime = document.createElement("label");
    let inputTime = document.createElement("input");
    inputTime.setAttribute("type", "time");
    inputTime.setAttribute("id", "inputTime");

    let cardHeader = document.createElement("h2");
    cardHeader.innerHTML = `${event.park_name}`;

    let cardContent = document.createElement("p");
    cardContent.innerHTML = `${event.notes}`;

    chzTime.innerHTML = "Choose Time to Visit";

    card.appendChild(cardHeader);
    card.appendChild(chzTime);
    card.appendChild(inputTime);
    card.appendChild(cardContent);

    // card.appendChild(cardHeader);
    // card.appendChild(cardContent);
}


