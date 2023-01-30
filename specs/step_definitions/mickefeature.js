import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("m att jag är inloggad med {string} and {string}", (email, password) => {
    cy.visit("/");
    cy.get('#email').type(email);
    cy.get('#password').type(password);
    cy.get('[type="submit"]').click();

});

And("m jag är i kontrollpanelen", () => {
    cy.get('[onclick=\"location.href=\'/admin\'"]').click();
})

Then("m bilden borde synas", () => {
    
    cy.get('img').should("be.visible");
})

Then("m är jag i kontrollpanelen", () => {
    cy.get('.MuiCardHeader-content > .MuiTypography-root').should("contain", "Welcome");
    
})

Given("m att jag är inloggad", () => {
    cy.get('img').should("be.visible");
})