describe("Fresh News Box", () => {

  describe("home page", () => {
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

    it("should allow a user to navigate to sections and home views", () => {
      cy.get("[data-cy=nav-icon]").eq(1).click({force: true});
      cy.url().should("eq","http://localhost:3000/sections");
      cy.get("[data-cy=nav-icon]").first().click({force: true});
      cy.url().should("eq", "http://localhost:3000/");
    });
  });
  describe("article details", () => {
    beforeEach(() => {
      cy.intercept("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=H0C3x8Db3n4KJKd8A4pqbgdQQbch2K06", {fixture: "articles.json"});
      cy.visit("http://localhost:3000/");
      cy.viewport('iphone-6');
    });
    it("should show the user details about the article", () => {
      cy.get("[data-cy=card-btn]").first().click()
      cy.url().should("contain", "http://localhost:3000/Facebook%20Says%20Trump%E2%80%99s%20Ban%20Will%20Last%20at%20Least%202%20Years")
      cy.get("[data-cy=details]").should("contain", "Facebook Says Trump’s Ban Will Last at Least 2 Years")
        .and("contain", "By Mike Isaac and Sheera Frenkel")
        .and("contain", "The decision puts a time frame on the former president’s suspension, which was put in place after the Capitol riots in January.");
      cy.get('[data-cy=details-img]').should("have.attr", "src").should("include", "https://static01.nyt.com/images/2021/06/04/business/04facebook/merlin_184403487_0edf74c3-47e5-41cc-a9c5-ac76401bd12d-superJumbo.jpg");
      cy.get("[data-cy=details-link]").should("contain", "TAKE ME TO THE FULL ARTICLE")
       .and("have.attr", "href").should("include", "https://www.nytimes.com/2021/06/04/technology/facebook-trump-ban.html")
    });
  });
  describe("change article section", () => {
    beforeEach(() => {
      cy.intercept("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=H0C3x8Db3n4KJKd8A4pqbgdQQbch2K06", {fixture: "articles.json"});
      cy.intercept("https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=H0C3x8Db3n4KJKd8A4pqbgdQQbch2K06", {fixture: "articles.json"});
      cy.visit("http://localhost:3000/");
      cy.viewport('iphone-6');
    });
    it("should allow a user to change the section they are viewing", () => {
      cy.get("[data-cy=nav-icon]").eq(1).click({force: true});
      cy.get("[data-cy=section-choice]").first().click();
      cy.get("[data-cy=sections-btn]").click();
      cy.url().should("eq", "http://localhost:3000/");
      cy.get('[data-cy=section-intro]').should('contain', 'You are now viewing the arts section...');
    });
  });
  describe("change article section", () => {
    beforeEach(() => {
      cy.intercept({
        method: "GET",
        url: "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=H0C3x8Db3n4KJKd8A4pqbgdQQbch2K06"
      }, 
      {
        statusCode: 500,
        body: {
          message: "Sorry, we're having an issue grabbing today's news..check back later"
        }
      });
      cy.visit("http://localhost:3000/");
      cy.viewport('iphone-6');
    });
    it("should display an error message if there is an issues with getting articles", () => {
      cy.get("[data-cy=server-err-msg]").should("contain", "Sorry, we're having an issue grabbing today's news..check back later");
    });
  });
});