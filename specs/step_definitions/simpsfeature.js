import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("s that im logged in with {string} and {string}", (email, password) => {
  cy.visit("/");
  cy.get('#email').type(email);
  cy.get("#password").type(password);
  cy.get('[type="submit"]').click(); 
   
});

//Log in, Navigate to teacher page and access Register new teacher tab
And("s i am on teachers tab", () =>{
  cy.get('[onclick="location.href=\'/admin\'"]').click();
  cy.get('[href="#/teachers"]').click();
})

//Log in, Navigate to teacher page and access Register new teacher tab
When("s i press create button", () => {
  cy.get('.MuiToolbar-root > a.MuiButton-root').click();
})

// Log in, Navigate to teacher page and access Register new teacher tab
Then("s i come to register teacher", () => {
  cy.url().should('include', 'http://localhost:7655/admin/#/teachers/create');
});


//Register new course

And("s that im in the admin page", () => {
  cy.get('[onclick="location.href=\'/admin\'"]').click();
})

And("s im in the invoice items tab", () => {
  cy.get('[href="#/invoice_items"]').click();

})

And("s that i have clicked create", () => {
  cy.get('.MuiToolbar-root > a.MuiButton-root').click();
})

And("s have filled out {string} and {int} and {string}", (title, unit, netPrice) => {
  cy.get('#title').type(title);
  cy.get('#unit').type(unit);
  cy.get('#netPrice').type(netPrice);
})

Then("s i press save", () => {
  cy.get('.RaToolbar-defaultToolbar > .MuiButton-root').click();
})


//Delete the newly created element
//Goes to page 2 and checks that the url is correct for page 2
And("s that im in page 2", () => {
  cy.get('[data-testid="NavigateNextIcon"]').click();
  // cy.url().should('include', 'http://localhost:7655/admin/#/invoice_items?filter=%7B%7D&order=ASC&page=2&perPage=10&sort=id');
})

And("s that id {string} is marked", () => {
  cy.wait(500);
  cy.wait(500);

  cy.get('.MuiTableBody-root').contains('Example invoice').then(($el) => {
      const nthChild = $el.closest('.MuiTableRow-root').index() + 1;
      cy.wait(500).get(`:nth-child(${nthChild}) > .column-name > .MuiTypography-root`)
        .should('be.visible')
        .then(() => {
          cy.get(':nth-child(1) > .column-undefined > .MuiButton-root').click();
        });
      });
  
  
  
  
  
  
  //   cy.wait(500);
  //  // cy.get('[data-testid="NavigateNextIcon"]').click();
  //   cy.wait(500);

  //   cy.get('.MuiTableBody-root').contains('Example invoice').then(($el) => {
  //       const nthChild = $el.closest('.MuiTableRow-root').index() + 1;
  //       cy.wait(500).get(`:nth-child(${nthChild}) > .column-name > .MuiTypography-root`)
  //         .should('be.visible')
  //         .then(() => {
  //           cy.get(`:nth-child(${nthChild}) > .column-undefined > .MuiButton-root`).click();
  //         });
  //     });
})

Then("s delete this element", () => {
  cy.get('[data-test="bulk-actions-toolbar"] > .MuiToolbar-root > .MuiButton-root').click();
})