describe("Testing within the BootcampHub", () => {
  it("Visit the BootcampHub", () => {
    cy.visit("/");
    // click on the login button
    cy.get(
      "#__next > div > div > header > div > div.rightBar > button.ant-btn.ant-btn-default.login > a"
    ).click();
    // Type email into input field
    cy.get(
      "#__next > div > div.authentication_2.container > div.auth_form_container > div > div > form > div.input_field_2 > div > div > input[type=text]"
    ).type("shimu2621@gmail.com");
    // Type password into input field
    cy.get(
      "#__next > div > div.authentication_2.container > div.auth_form_container > div > div > form > div:nth-child(2) > div.input_field_2 > div > div.input_with_icon > input[type=password]"
    ).type("Zohanash#2011");
    // Click on submit button
    cy.get(
      "#__next > div > div.authentication_2.container > div.auth_form_container > div > div > form > button"
    ).click();

    // Click on button of select university
    cy.get("#__next > div > div > div.ant-empty-footer > button >").click({
      force: true,
    });
    cy.get(
      "body > div:nth-child(8) > div > div.ant-modal-wrap > div > div:nth-child(1) > div > div.ant-modal-body > div > div > div > ul > li > ul > li > button > span"
    ).click({ force: true });
    // Click on chat button(click <li>)
    cy.get(
      "#header_2 > nav > div > div > ul > li:nth-child(3) > button"
    ).click();

    // Visit to the chat page
    cy.visit("https://portal.bootcampshub.ai/chat");

    // Click on button of create chat
    cy.get(".start-button").click();

    cy.contains("li.ant-dropdown-menu-item", "New Crowd").click();

    cy.get("#name").type("Test New Crowd");

    cy.get("textarea[placeholder = 'Maximum 200 character']").type(
      "This is the test description"
    );

    cy.get("button.button.primary").click();

    // Type a new crowd user's email
    cy.get("input[placeholder = 'Search user']").type(
      "khanshohaibhossain@gmail.com"
    );

    // check new crowd user's email and name existance
    cy.get(".info")
      .contains(".email", "khanshohaibhossain@gmail.com")
      .should("be.visible")
      .parent()
      .within(() => {
        cy.get("h3.name").should("have.text", "Shohaib hossain");
      });
    // Click the circular button
    cy.contains(".user_item", "khanshohaibhossain@gmail.com")
      .should("be.visible")
      .within(() => {
        cy.get("button.circular_button").click();
      });

    // Clear first and type new user email
    cy.get("input[placeholder = 'Search user']")
      .clear()
      .type("she2farah@gmail.com");

    // Check info
    cy.get(".info")
      .contains(".email", "she2farah@gmail.com")
      .should("be.visible")
      .parent()
      .within(() => {
        cy.get("h3.name").should("have.text", "Khadija Farah");
      });

    cy.contains(".user_item", "she2farah@gmail.com")
      .should("be.visible")
      .within(() => {
        cy.get("button.circular_button").click();
      });
    cy.contains("button", "Create").click();

    cy.visit("https://portal.bootcampshub.ai/chat/6781e278c724cd001a373c08");

    // remove chat
    cy.get(".name-title h4").contains("Test New Crowd").click();
    // cy.get(".members-card .action-btn").click({ multiple: true });

    // Click 3 dot and check "Khadija Farah" name btn existance
    cy.get(".members-card")
      .contains("Khadija Farah")
      .parents(".members-card") // Ensure you're selecting the correct card
      .find(".action-btn") // Directly find the button inside this specific card
      .click();

    //Click next 3 dot and check "Shohaib hossain" name btn existance
    cy.get(".members-card")
      .contains("Shohaib hossain")
      .parents(".members-card")
      .find(".action-btn")
      .should("be.visible") // Ensure the button is visible
      .click();

    //check remove btn existance
    cy.contains("button", "Remove").click({ force: true });
    // Check this text existance
    cy.get("h1.message-title")
      .contains("Are you sure to remove this member?")
      .should("be.visible");

    // Click the remove btn
    cy.get("button.button.primary.w-full").click();

    // Click the btn "Archive Group"
    cy.get("button.archive-group").click();
    // cy.get("#mantine-hrjofs5ke-target > svg", { timeout: 10000 }) // Extend timeout
    //   .should("be.visible")
    //   .click();

    // cy.get("div.text-editor > div.right-btn")
    //   .find("button.icon-btn", { multiple: true })
    //   .first() // Selects the first matching button
    //   .click();
  });
});
