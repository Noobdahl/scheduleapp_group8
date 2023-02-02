import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";

// Scenario: Login
Given("k Logged in with the information {string} and {string}", (email, password) => {
    cy.visit("/");
    cy.get('#email').type(email);
    cy.get("#password").type(password);
    cy.get('[type="submit"]').click(); 
     
  });