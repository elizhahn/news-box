describe("Fresh News Box", () => {
  beforeEach(() => {
    cy.intercept("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=H0C3x8Db3n4KJKd8A4pqbgdQQbch2K06", {fixture: "articles.json"});
    cy.visit("http://localhost:3000/");
    cy.viewport('iphone-6');
  })
  it("should display an app title, and the current section being viewed", () => {
    cy.get('[data-cy=app-title]').should('contain', 'Fresh News Box');
    cy.get('[data-cy=section-intro]').should('contain', 'You are now viewing the home section...');
  });

  it("should display a loading message while articles are being fetched", () => {
    cy.get('[data-cy=loading-msg]').should('contain', "Loading news...");
  });

  it("should display article cards", () => {
    cy.get('[data-cy=article-card]').first().should("contain", "Facebook Says Trump’s Ban Will Last at Least 2 Years")
    .and("contain", "published: 2021-06-04").get("[data-cy=card-btn]").should("contain", "EXPLORE MORE")
    .get("[data-cy=card-img]").should("have.attr", "src").should("include", "https://static01.nyt.com/images/2021/06/04/business/04facebook/04facebook-thumbLarge.jpg");
  });
});