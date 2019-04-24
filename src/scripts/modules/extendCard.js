module.exports.extendCard = function(event) {
  // do something
  //  [3] is type, [4] is id
  let idSplit = event.target.id.split("-");
  let parentDiv = document.querySelector(`#card--${idSplit[3]}-${idSplit[4]}`);
  let expandDiv = parentDiv.querySelector(".card__expandable");
  let button = document.querySelector(`#${event.target.id}`);
  console.log(button.innerHTML);
  if (parentDiv.classList.contains("expanded")) {
    expandDiv.classList.replace("card__expanded", "card__expand");
    button.innerHTML = "More Info";
  } else {
    expandDiv.classList.replace("card__expand", "card__expanded");
    button.innerHTML = "Show less";
  }
  parentDiv.classList.toggle("expanded");
};
