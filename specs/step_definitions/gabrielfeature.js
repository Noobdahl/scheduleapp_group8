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

// Scenario: Lägg till något i schools
And("g klickar på admin", () =>{
  cy.get('[onclick="location.href=\'/admin\'"]').click();
})

// Scenario: Lägg till något i schools
And("g är på admin sida", () =>{
  cy.get('.MuiCardHeader-root').should("contain", "Welcome");
})

// Scenario: Lägg till något i schools
When("g klickar på schools fliken", () =>{
  cy.get('[href="#/schools"]').click();
})

// Scenario: Lägg till något i schools
And("g klickar på create knappen", () =>{
  cy.get('.MuiToolbar-root > a.MuiButton-root').click();
})

And("g skriver in en {string}", (skola) => {
  cy.get('#name').type(skola);
})

And("g skriver in {string} för skolan", (förkortningen) =>{
  cy.get('#shortName').type(förkortningen);
})

Then("g klickar på save", () => {
  cy.get('[data-testid="SaveIcon"]').click();
})

Then("g kommer till schools fliken", () =>{
  cy.visit("/");
})



// // Scenario: Lägg till något i schools
// Then("g så kan du skapa en ny skola", () =>{
//   cy.get('#react-admin-title > span').should('contain', "Register New School");
// })

// // Scenario: Nästa sida
// Then("g så är jag på admin sida", () =>{
//   cy.get('.MuiCardHeader-content > .MuiTypography-root').should("contain", "Welcome");
// })

// // Scenario: Nästa sida
// Then("g klickar på teachers", () =>{
//   cy.get('.RaMenuItemLink-active').click();
// })



