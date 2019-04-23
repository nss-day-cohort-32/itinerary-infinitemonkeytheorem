import { KeyObject } from "crypto";
function returnSearchPark(search) {
    var searched = "";
    fetch(`https://data.nashville.gov/resource/74d7-b74t.json?${search}=Yes`)
        .then(result => result.json())
        .then(parks => {
            console.log(parks);
        });
}

