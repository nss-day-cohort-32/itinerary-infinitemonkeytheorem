import { buildCard } from "./cardBuilder";
module.exports.searchPark = function(searchString) {
  var search = searchString.split(" ").join("_");
  fetch(`https://data.nashville.gov/resource/74d7-b74t.json?${search}=Yes`)
    .then(result => result.json())
    .then(parks => {
      parks.forEach(park => {
        // console.log(park); test
        let address = park.mapped_location.human_address.split("\"");
        var theAdress = `${address[3]}, ${address[7]} ${address[11]}`;
        var features = returnFeatures(park);
        const card = buildCard({
          type: "Park" /* parks, restaurants, etc.  */,
          title: `${park.park_name}`,
          subtitle: `${park.notes}`,
          image: {
            url: "",
            alt: ""
          },
          startTime: "" /* dateTime object */,
          location: theAdress,
          extendedContent: `<p>features: ${features}</p>`, // innerHTML content
          id: "" /* make sure to pass unique values for each card */
        });
        const root = document.querySelector("#root");
        root.innerHTML += card;

        // console.log(card); html test
      });
    });
};

//function keys with the value of "YES" and return the key split(_)join " "
function returnFeatures(obj) {
  var keyArray = [];
  for (var key in obj) {
    if (obj[key] === "Yes") {
      // console.log(key); test
      var split = key.split("_").join(" ");
      keyArray.push(split);
    }
  }
  return keyArray.join(", ");
}
