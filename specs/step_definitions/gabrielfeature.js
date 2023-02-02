import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";

// Scenario: Logga in sidan
Given("g att jag är inloggad med {string} and {string}", (email, password) => {
  cy.visit("/");
  cy.url().should('contain', "login");
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

// Scenario: Nästa sida
And("g kommer till admin", () =>{
  cy.get('[onclick="location.href=\'/admin\'"]').click();
})

// Scenario: Nästa sida
And("g klickar på schools fliken", () => {
  cy.get('[href="#/schools"]').click();
})

// Scenario: Nästa sida
And("g klickar på pilen till nästa sida", () =>{
  cy.get('[data-testid="NavigateNextIcon"]').click();
})

// Scenario: Nästa sida
Then("g har hamnat på nästa sida", () =>{
  cy.get('#main-content').should('contain', "A till O");
})

// Scenario: Markera vald Invoce item
And("g klickar på Invoice items fliken", () =>{
  cy.get('[onclick="location.href=\'/admin\'"]').click();
  cy.get('[href="#/invoice_items"]').click();
})

// Scenario: Markera vald Invoce item
And("g markerar sista elementet", () =>{
  cy.get(':nth-child(10) > .MuiTableCell-paddingCheckbox > .MuiCheckbox-root > .PrivateSwitchBase-input').click();
  cy.get(':nth-child(10) > .column-id').should('contain', "11");
})

// Scenario: Markera vald Invoce item
And("klickar den valda fliken", () =>{
  cy.get('[data-test="bulk-actions-toolbar"] > .MuiToolbar-root > .MuiButton-root')
})

// Scenario: Markera vald Invoce item
Then("undervisning med Net price 3kr ska vara markerad", () =>{
  cy.get(':nth-child(10) > .column-netPrice').should('contain', "3");
})
