
import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";

// Logga in sidan
Given("att jag är inloggad med {string} and {string}", (email, password) => {
  cy.visit("/");
  cy.get('#email').type(email);
  cy.get("#password").type(password);
  cy.get('[type="submit"]').click(); 
   
});

Then("så ser jag schemat", () => {
  cy.get('img').should('be.visible');
});

And("klickar på till idag", () => {
  cy.get('#goToToday').click();
})

And("klickar på admin knappen", () =>{
  cy.get('[onclick="location.href=\'/admin\'"]').click();
})

Then("kommer till admin sida", () =>{
  cy.get('.MuiCardHeader-content > .MuiTypography-root').should("contain", "Welcome");
})

Then("så kommer jag till dagens datum", () => {
  cy.get('aside > table > tbody > .today > :nth-child(1)').should('contain', "2023");
})

When("jag klickar på admin", () =>{
  cy.get('[onclick="location.href=\'/admin\'"]').click();
})

Then("så är jag på admin sida", () => {
  cy.get('.MuiCardHeader-content > .MuiTypography-root').should("contain", "Welcome");
})

Then("klickar på teachers", () =>{
  cy.get('.RaMenuItemLink-active').click();
})






