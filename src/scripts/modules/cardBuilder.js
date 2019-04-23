const card = {
  type: "" /* parks, restaurants, etc.  */,
  title: "",
  subtitle: "",
  image: {
    url: "",
    alt: ""
  },
  startTime: "" /* dateTime object */,
  location: "",
  extendedContent: "", // innerHTML content
  id: "" /* make sure to pass unique values for each card */
};

module.exports = {
  buildCard: function(card) {
    return `
  <div class="mdc-card" id="card--${card.type}-${card.id}">
    <div class="mdc-card__image">
      <img src="${card.image.url}" alt="${card.image.alt}">
    </div>
    <div class="mdc-card__content">
      <div class="mdc-card__meta">
        ${card.startTime}
      </div>
      <article class="mdc-card__article">
        <h3>${card.title}</h3>
        <p>${card.subtitle}</p>
        <p>${card.location}</p>
      </article>
    </div>
    <div class="mdc-card__action">
      <button id="button--${card.type}-${card.id}">
        Pick me!!
      </button>
    </div>
    <div class="mdc-card__expanded">
      ${card.extendedContent}
    </div>
  </div>`;
  }
};