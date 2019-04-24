module.exports = {
  buildCard: function(card) {
    console.log(card.image.url);
    if (card.image.url === "") {
      card.image.url = "img/placeholder.jpg";
    }
    return `
    <div class="card" id="card--${card.type}-${card.id}">
      <div class="card__image">
        <img src="${card.image.url}" alt="${card.image.alt}" />
      </div>
      <div class="card__content">
        <div class="card__meta">
          ${card.startDate}
          ${card.startTime}
        </div>
        <article class="card__article">
          <h3 id="cardTitle">${card.title}</h3>
          <p>${card.subtitle}</p>
          <p id="eventLocation">${card.location}</p>
        </article>
      </div>
      <div class="card__action">
        <button
          class="card__btn card__btn--extend"
          id="button--ext-${card.type}-${card.id}">
          More Info</button>
        <button
          class="card__btn card__btn--primary"
          id="button--add-${card.type}-${card.id}"
        >
          Pick me!!
    </button>
      </div>
      <div class="card__expand card__expandable">${card.extendedContent}</div>
</div >`;
  }
};
