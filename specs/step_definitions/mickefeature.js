import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";

// Given("m att jag är inloggad med {string} and {string}", (email, password) => {
//     cy.visit("/");
//     cy.get('#email').type(email);
//     cy.get('#password').type(password);
//     cy.get('[type="submit"]').click();

// });

// And("m jag är i kontrollpanelen", () => {
//     cy.get('[onclick=\"location.href=\'/admin\'"]').click();
// })

// Then("m bilden borde synas", () => {
    
//     cy.get('img').should("be.visible");
// })

// Then("m är jag i kontrollpanelen", () => {
//     cy.get('.MuiCardHeader-content > .MuiTypography-root').should("contain", "Welcome");
    
// })

// Given("m att jag är inloggad", () => {
//     cy.get('img').should("be.visible");
// })



Given("m att jag är på home", () => {
    cy.visit("/");
})

When("m jag skriver in {string} i {string}", (value, field) => {
    cy.get(field).type(value);
})

And("m jag klickar på loginknappen", () => {
    cy.get('[type="submit"]').click();
})

Then("m är jag inloggad", () => {
    cy.url().should('not.contain', "login");
})





Given("m att jag är inloggad", () => {
    cy.visit("/");
    cy.get('#email').type("exempel@school.net");
    cy.get('#password').type("abc123");
    cy.get('[type="submit"]').click();

    cy.url().should('not.contain', "login");
})

And("m jag är på schemasidan", () => {
    cy.get('img').should("be.visible");
})

When("m jag klickar på logoutbutton", () => {
    //cy.get('[onclick=\"location.href=\'/admin\'"]').click();
    cy.get('[onclick="location.href=\'/logout.html\'"]').click();
})

Then("m är jag på startsidan", () => {
    cy.url().should('contain', "login");
})


When("m jag klickar på en lektion", () => {
    cy.get('.big > tbody > :nth-child(37) > :nth-child(5) > .class > .has-details').click();
})

Then("m ser jag informationen", () => {
    cy.get('.big > tbody > :nth-child(37) > :nth-child(5) > .class > .details > .event > .notes').should('contain', "SYSM6")
})