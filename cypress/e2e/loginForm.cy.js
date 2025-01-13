describe("Login the form", () => {
  it("Checking the login form", () => {
    cy.visit("https://www.bootcampshub.ai/branch-landing-page");
    cy.get(
      "#__next > div > div > header > div > div.rightBar > button.ant-btn.ant-btn-default.login > a"
    ).click();
    cy.get(
      "#__next > div > div.authentication_2.container > div.auth_form_container > div > div > form > div.input_field_2 > div > div > input[type=text]"
    ).type("shimu2621@gmail.com");
    cy.get(
      "#__next > div > div.authentication_2.container > div.auth_form_container > div > div > form > div:nth-child(2) > div.input_field_2 > div > div.input_with_icon > input[type=password]"
    ).type("Zohanash#2011");
    cy.get(
      "#__next > div > div.authentication_2.container > div.auth_form_container > div > div > form > button"
    ).click();
    cy.get(
      "#__next > div > div.authentication_2.container > div.auth_form_container > div > div > form > p:nth-child(6) > a"
    ).click();
    // cy.get(
    //   "#__next > div > div.authentication_2.register_container.container > div.auth_form_container > div > div > form > div:nth-child(1) > div > div > input[type=text]"
    // ).type("Don");
    // cy.get(
    //   "#__next > div > div.authentication_2.register_container.container > div.auth_form_container > div > div > form > div:nth-child(2) > div > div > input[type=text]"
    // ).type("Samuel");
    // cy.get(
    //   "#__next > div > div.authentication_2.register_container.container > div.auth_form_container > div > div > form > div:nth-child(3) > div > div > input[type=text]"
    // ).type("dekoj95698@matmayer.com");
    // cy.get(
    //   "#__next > div > div.authentication_2.register_container.container > div.auth_form_container > div > div > form > div:nth-child(4) > div > div > input"
    // ).type("18143511057");
    // cy.get(
    //   "#__next > div > div.authentication_2.register_container.container > div.auth_form_container > div > div > form > div:nth-child(5) > div.input_field_2 > div > div.input_with_icon > input[type=password]"
    // ).type("Samuel#1234");
    // cy.get(
    //   "#__next > div > div.authentication_2.register_container.container > div.auth_form_container > div > div > form > div:nth-child(6) > div.input_field_2 > div > div.input_with_icon > input[type=password]"
    // ).type("Samuel#1234");
    // cy.get(
    //   "#__next > div > div.authentication_2.register_container.container > div.auth_form_container > div > div > form > button"
    // ).click();
    // cy.get("#__next > div > div.verification_form_2 > div > button").click();
    cy.url().should("include", "/dashboard");
  });
});
