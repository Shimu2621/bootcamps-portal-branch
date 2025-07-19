describe("Testing within the BootcampHub", () => {
  it("Visit the BootcampHub", () => {
    cy.visit("/");

    cy.get(
      "#__next > div > div > header > div > div.rightBar > button.ant-btn.ant-btn-default.login > a"
    ).click();

    cy.get(
      "#__next > div > div.authentication_2.container > div.auth_form_container > div > div > form > div.input_field_2 > div > div > input[type=text]"
    ).type("shimu2621@gmail.com");

    cy.get(
      "#__next > div > div.authentication_2.container > div.auth_form_container > div > div > form > div:nth-child(2) > div.input_field_2 > div > div.input_with_icon > input[type=password]"
    ).type("Zohanash#2011");
    // Click on submit button
    cy.get(
      "#__next > div > div.authentication_2.container > div.auth_form_container > div > div > form > button"
    ).click();

    // Click on select university
    cy.get("#__next > div > div > div.ant-empty-footer > button >").click({
      force: true,
    });
    cy.get(
      "body > div:nth-child(8) > div > div.ant-modal-wrap > div > div:nth-child(1) > div > div.ant-modal-body > div > div > div > ul > li > ul > li > button > span"
    ).click({ force: true });
    // Click on chat button
    cy.get(
      "#header_2 > nav > div > div > ul > li:nth-child(3) > button"
    ).click();

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

    cy.get("input[placeholder = 'Search user']")
      .clear()
      .type("she2farah@gmail.com");

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

    cy.get(".name-title h4").contains("Test New Crowd").click();

    // Click 3 dot and check "Khadija Farah" name btn existance
    cy.get(".members-card")
      .contains("Khadija Farah")
      .parents(".members-card")
      .find(".action-btn")
      .click();

    cy.get(".members-card")
      .contains("Shohaib hossain")
      .parents(".members-card")
      .find(".action-btn")
      .should("be.visible") // Ensure the button is visible
      .click();

    cy.contains("button", "Remove").click({ force: true });

    cy.get("h1.message-title")
      .contains("Are you sure to remove this member?")
      .should("be.visible");

    cy.get("button.button.primary.w-full").click();

    // cy.get("button.archive-group").contains("Archive Group").click();

    cy.get('button.icon-btn[aria-expanded="false"] svg path[fill="#546A7E"]')
      .parents("button.icon-btn")
      .click();

    cy.contains("div", "Photos & Videos").should("be.visible").click();

    cy.get("input[type='file']").attachFile("technology.jpg"); // Upload the file

    cy.get(
      "#__next > div > div > div > div.chat-body-wrap > div > div > div > div.m-96bdd299.mantine-Grid-col.chat-inbox-wrapper.__m__-r24 > div > div > div.inbox-footer > div > div > div.text-editor > div.editor-input > div.text_editor > div > div > textarea"
    ).type("Hello, this is the new photos uploaded here.");
    cy.get("button.icon-btn.sent-btn").should("be.visible").click();
  });
});
