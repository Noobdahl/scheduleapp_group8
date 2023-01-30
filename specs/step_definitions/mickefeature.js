import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("att jag är inloggad med {string} and {string}", (email, password) => {
    cy.visit("/");
    cy.get('#email').type(email);
    cy.get('#password').type(password);
    cy.get('[type="submit"]').click();

});

And("jag är i kontrollpanelen", () => {
    cy.get('[onclick=\"location.href=\'/admin\'"]').click();
})

Then("bilden borde synas", () => {
    
    cy.get('img').should("be.visible");
})

Then("är jag i kontrollpanelen", () => {
    cy.get('.MuiCardHeader-content > .MuiTypography-root').should("contain", "Welcome");
    
})