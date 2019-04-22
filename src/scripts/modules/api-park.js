
fetch("https://data.nashville.gov/resource/74d7-b74t.json")
    .then(result => result.json())
    .then(parks => {
        console.log(parks);
        parks.map(callName);
    });

    function callName(obj){
        console.log(obj.park_name);
    };