import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";

// Scenario: Log in on the page
Given("s that im logged in with {string} and {string}", (email, password) => {
  cy.visit("/");
  cy.get('#email').type(email);
  cy.get("#password").type(password);
  cy.get('[type="submit"]').click(); 
   
});

And("s i press the admin button", () => {
    cy.get('[onclick="location.href=\'/admin\'"]').click();
})

And("s kommer till admin sida", () =>{
  cy.get('.MuiCardHeader-content > .MuiTypography-root').should("contain", "Welcome");
})

When("s klickar på teachers", () => {
  cy.get('[href="#/teachers"]').click();
})

Then("s kommer till teachers instälningar"), () => {
  cy.get('.column-firstname > .MuiButtonBase-root > span').should('contain', "Firstname");
}












//test

// import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";

// Given('that I am logged into admin', () => {
//     cy.visit('/login.html')
//     cy.get('#email').type('exempel@school.net')
//     cy.get('#password').type('abc123')
//     cy.get('#login > input[type=submit]').click()
//     cy.visit('/admin')
// });

// When('I navigate to the teachers page', () => {
//     cy.get('.RaLayout-appFrame a:nth-child(2)').click()
// });