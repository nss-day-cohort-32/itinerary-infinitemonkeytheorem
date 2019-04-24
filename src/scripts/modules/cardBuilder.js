module.exports = {
  buildCard: function(card) {
    return `
  <div class="mdc-card" id="card--${card.type}-${card.id}">
    <div class="mdc-card__image">
      <img src="${card.image.url}" alt="${card.image.alt}">
    </div>
    <div class="mdc-card__content">
      <div class="mdc-card__meta">
        ${card.startDate}
        ${card.startTime}
      </div>
      <article class="mdc-card__article">
        <h3 id="cardTitle">${card.title}</h3>
        <p>${card.subtitle}</p>
        <p id="cardLocation">${card.location}</p>
      </article>
    </div>
    <div class="mdc-card__action">
      <button class="addBtn" id="button--${card.type}-${card.id}">
        Pick me!!
      </button>
    </div>
    <div class="mdc-card__expanded">
      ${card.extendedContent}
    </div>
  </div>`;
  }
};
