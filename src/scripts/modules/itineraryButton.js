import { buildCard } from "./cardBuilder";
import { searchConcerts } from "./API-concerts";

getBtnElements();

function getBtnElements(){
    const addBtn = document.querySelector("#root");
    addBtn.addEventListener("click", addToItinerary);
}

function addToItinerary(event){
    let itineraryItem = event.target.value.innerHTML;
    let root = document.querySelector("#root");
    root.innerHTML = "";
    root.innerHTML += itineraryItem;
    console.log(root);
}

// let addBtn = document.querySelector(".addBtn").addEventListener("click", function(){
//     let addedCard = document.getElementById(`card--${card.type}-${card.id}`);
//     let root = document.querySelector("#root");
//     root.innerHTML += addedCard;
//     console.log(root.innerHTML);
// });

