console.log("Hello, World!");

function searchConcerts() {
    fetch("https://app.ticketmaster.com/discovery/v2/events.json?apikey=VljGRC0DhTR15ecGRXfkPFXQkBSiqh0x")
      .then(events => events.json())
      .then(event => {
          console.table(event);
        });
  };
  searchConcerts();