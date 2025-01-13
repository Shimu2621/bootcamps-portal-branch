/// <reference types="cypress" />

describe("My first test with cypress", () => {
  it("Visit a website", () => {
    cy.visit("https://www.bootcampshub.ai/branch-landing-page");
    cy.get(
      "#__next > div > div > header > div > div.rightBar > button.ant-btn.ant-btn-default.login > a"
    ).click();
  });
});
