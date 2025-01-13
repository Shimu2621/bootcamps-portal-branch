describe("Selectors", () => {
  it("Get a selector", () => {
    cy.visit("https://www.bootcampshub.ai/branch-landing-page");
    // cy.get("#__next");
    cy.get(".brandLandingPage_container");
    cy.get('[class*="ant-btn"]');
    cy.get("#__NEXT_DATA__");
    cy.get("#gtm-script");
    cy.get(".branch_footer");
    cy.get('[class*="main_content"]');
    cy.get(
      "#__next > div > div > header > div > nav > ul > li:nth-child(2) > a"
    );
    cy.get(
      "#__next > div > div > section.b1 > div.banner_main > div.left_side > div.left_text > p"
    );
    cy.get(
      "#__next > div > div > section.b1 > div.banner_main > div.left_side > div.left_text > ul > li:nth-child(3) > svg"
    );
    cy.get('[class*="last_text"]');
    cy.get(".branch_footer");
  });
});
