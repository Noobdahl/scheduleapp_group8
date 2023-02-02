import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";


Given("m att jag är på home", () => {
    //takes me to home page
    cy.visit("/");
})
When("m jag skriver in {string} i {string}", (value, field) => {
    //inputs value to chosen field
    cy.get(field).type(value);
})
Then("m är jag inloggad", () => {
    cy.url().should('not.contain', "login");
    cy.url().should('eq', "http://localhost:7655/");
})
When("m jag klickar på {string}", (button) => {
    cy.get(button).click();
})

Given("m att jag är inloggad", () => {
    cy.visit("/");
    cy.get('#email').type("exempel@school.net");
    cy.get('#password').type("abc123");
    cy.get('[type="submit"]').click();
})
And("m jag är på schemasidan", () => {
    cy.get('img').should("be.visible");
    cy.url().should('eq', "http://localhost:7655/");
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

And("m jag är i schools-tabben", () => {
    cy.get('[onclick="location.href=\'/admin\'"]').click();
    cy.get('[href="#/schools"]').click();
})

And("m jag är i teacher-tabben", () => {
    cy.get('[onclick="location.href=\'/admin\'"]').click();
    cy.get('[href="#/teachers"]').click();
})

And("select", () => {
    cy.get('#mui-component-select-roles').click();
    cy.get('.MuiList-root > [tabindex="-1"]').click();
})
And("deselect",() => {
    cy.get('body').trigger('keydown', { keyCode: 27});
    cy.wait(500);
    cy.get('body').trigger('keyup', { keyCode: 27});
})
And("save",() => {
    cy.get('.RaToolbar-defaultToolbar > .MuiButton-root').click();
})