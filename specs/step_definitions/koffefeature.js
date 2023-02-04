import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";

// Scenario: Login
Given("k That I am on the homepage", () => {
  cy.visit("/");
  cy.url().should('contain', "login");
});

And("k That i've entered proper credentials such as {string} and {string}", (email, password) => {
  cy.get('#email').type(email);
  cy.get("#password").type(password);
  cy.get('#email').should('have.value', email);
  cy.get('#password').should('have.value', password);
});

When("k I click login button", () => {
  cy.get('[type="submit"]').click(); 
});

Then ("k I am now logged in", () => {
  cy.url().should('eq', "http://localhost:7655/");
});

Given("k That I am logged in", () => {
  cy.visit("/");
  cy.get('#email').type("exempel@school.net");
  cy.get("#password").type("abc123");
  cy.get('[type="submit"]').click(); 
  cy.url().should('eq', "http://localhost:7655/");
});

And("k I am on the schedule page", () => {
  cy.url().should('eq', "http://localhost:7655/");
});

When("k I press the Today button", () => {
  cy.get('#goToToday').click();
});

Then("k Page will scroll up or down until it reaches todays date", () => {
  cy.get('aside > table > tbody > .today > :nth-child(1)').should('contain', (new Date().toISOString()).substring(0, 10));
});

When("k I click on the logout button", () => {
  cy.get('[onclick="location.href=\'/logout.html\'"]').click();
});

Then("k I am sent to the login page", () => {
  cy.url().should('contain', "login");
});