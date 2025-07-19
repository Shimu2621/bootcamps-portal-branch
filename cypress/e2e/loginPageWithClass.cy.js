import LoginPage from "../../page/loginPage";

describe("Login with POM model", () => {
  it("Login page with class", () => {
    const loginPage = new LoginPage();
    loginPage.visit();
    loginPage.clickLoginBtn();
    loginPage.typeEmail();
    loginPage.typePassword();
    loginPage.clickSubmitBtn();
  });
  it.only("Login with the data from json file", () => {
    const loginPage = new LoginPage(); //creates an instance of the LoginPage class, which is likely POM class.
    loginPage.visit();
    cy.fixture("logincredential.json").then((data) => {
      loginPage.loginWithData(data.email, data.password);
    });
    // cy.url({ timeout: 10000 }).should("include", "/dashboard");
  });
});
