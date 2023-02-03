import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";

// Scenario: Login
When("k I click the login button after entering the information {string} and {string}", (email, password) => {
  cy.visit("/");
  cy.url().should('contain', "login");
  cy.get('#email').type(email);
  cy.get("#password").type(password);
  cy.get('[type="submit"]').click(); 
});

// Scenario: View todays date
When("k I click the Today button", () => {
  cy.get('#goToToday').click();
});

// Scenario: At todays date
Then("k I am currently at todays date", () => {
  cy.get('aside > table > tbody > .today > :nth-child(1)').should('contain', TodaysDate);
});


// Scenario: Logout
Given("k I have pressed the logout button and been sent to the login page", () => {
  cy.visit("/");
  cy.url().should('contain', 'login');
});

