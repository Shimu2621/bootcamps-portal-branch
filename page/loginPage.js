class LoginPage {
  visit() {
    cy.visit("/");
  }
  clickLoginBtn() {
    cy.get(
      "#__next > div > div > header > div > div.rightBar > button.ant-btn.ant-btn-default.login > a"
    ).click();
  }
  typeEmail() {
    cy.get(
      "#__next > div > div.authentication_2.container > div.auth_form_container > div > div > form > div.input_field_2 > div > div > input[type=text]"
    ).type("email");
  }
  typePassword() {
    cy.get(
      "#__next > div > div.authentication_2.container > div.auth_form_container > div > div > form > div:nth-child(2) > div.input_field_2 > div > div.input_with_icon > input[type=password]"
    ).type("password");
  }
  clickSubmitBtn() {
    cy.get(
      "#__next > div > div.authentication_2.container > div.auth_form_container > div > div > form > button"
    ).click();
  }
  loginWithData(email, password) {
    this.clickLoginBtn();
    this.typeEmail(email);
    this.typePassword(password);
    this.clickSubmitBtn;
  }
}

export default LoginPage;
