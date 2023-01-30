import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";

// Scenario: Logga in sidan
Given("g att jag är inloggad med {string} and {string}", (email, password) => {
  cy.visit("/");
  cy.get('#email').type(email);
  cy.get("#password").type(password);
  cy.get('[type="submit"]').click(); 
   
});

// Scenario: Logga in sidan
Then("g så ser jag schemat", () => {
  cy.get('img').should('be.visible');
});

// Scenario: Komma till dagens datum
And("g klickar på till idag", () => {
  cy.get('#goToToday').click();
})

// Scenario: Komma till dagen datum
Then("g så kommer jag till dagens datum", () => {
  cy.get('aside > table > tbody > .today > :nth-child(1)').should('contain', "2023");
})

// Scenario: Komma till inställningar
And("g klickar på admin knappen", () =>{
  cy.get('[onclick="location.href=\'/admin\'"]').click();
})

// Scenario: Komma till inställngar
Then("g kommer till admin sida", () =>{
  cy.get('.MuiCardHeader-content > .MuiTypography-root').should("contain", "Welcome");
})

// Scenario: Komma till inställningar
When("g jag klickar på admin", () =>{
  cy.get('[onclick="location.href=\'/admin\'"]').click();
})

// Scenario: Nästa sida
Then("g så är jag på admin sida", () => {
  cy.get('.MuiCardHeader-content > .MuiTypography-root').should("contain", "Welcome");
})

// Scenario: Nästa sida
Then("g klickar på teachers", () =>{
  cy.get('.RaMenuItemLink-active').click();
})

// Scenario: Följ klasslänk
When("g klickar på klasslänk", () => {
  cy.get('header > table > thead > tr > :nth-child(3) > div > a'); 
})

// Scenario Följ klasslänk || Inte klar ännu!!!!
Then("g kommer till bloggen", () => {
    cy.get('#Kram6.newton.nodehill').should('have.prop', 'href', '/');
  })

