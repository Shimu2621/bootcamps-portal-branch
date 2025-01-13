describe("Assertion", () => {
  it("My first assertion", () => {
    cy.visit("https://www.bootcampshub.ai/branch-landing-page");
    cy.get(
      "#__next > div > div > header > div > div.logoDiv_parent > div > a > img"
    ).should("be.visible");
    cy.get(
      "#__next > div > div > section.b1 > div.banner_main > div.left_side > div.left_text > h2"
    ).should("have.text", "One Stop Solution for Trade School & Students");
    cy.get(
      "#__next > div > div > section.b1 > div.banner_main > div.left_side > div.left_text > h2"
    ).should("contain.text", "Students");
    cy.get(
      "#__next > div > div > section.b1 > div.banner_main > div.left_side > div.left_text > p"
    ).should(
      "have.text",
      "Transform Your Career From Any Background To IT, Through Project Centric-IT Bootcamp!"
    );
    cy.get(
      "#__next > div > div > section.b1 > div.banner_main > div.left_side > div.left_text > button"
    ).should("have.class", "ant-btn ant-btn-default");
    cy.get(
      "#__next > div > div > section.b1 > div.banner_main > div.left_side > div.left_text > button"
    ).should("contain.text", "Book a Meeting");
    cy.get(
      "#__next > div > div > section.b1 > div.banner_main > div.left_side > div.right_side > img.group_arrow"
    ).should("be.visible");
    cy.get(
      "#__next > div > div > section.b1 > div.banner_main > div.left_side > div.right_side > img.group_arrow"
    ).should("have.class", "group_arrow");
    cy.get(
      "#__next > div > div > header > div > nav > ul > li:nth-child(2) > a"
    ).should("have.attr", "href", "/branch-landing-page#getStart");
  });
});
