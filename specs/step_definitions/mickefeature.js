import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";


Given("m att jag är på home", () => {
    cy.visit("/");
    cy.url().should('contain', 'login');
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
    cy.url().should('eq', 'http://localhost:7655/')
})
And("m jag är på schemasidan", () => {
    cy.get('img').should("be.visible");
    cy.url().should('eq', "http://localhost:7655/");
})
Then("m är jag på startsidan", () => {
    cy.url().should('contain', "login");
})
When("m jag klickar på en lektion", () => {
    cy.wait(500)
    cy.get('.big > tbody > :nth-child(38) > :nth-child(5) > .class > .has-details').click();
})
Then("m ser jag informationen", () => {
    cy.get('.big > tbody > :nth-child(38) > :nth-child(5) > .class > .details > .event > .notes').should('contain', "Fördjupningsdag")
})

Then("m är jag på admin sidan", () => {
    cy.url().should('contain', "admin");
})

And("m jag är i schools-tabben", () => {
    cy.get('[onclick="location.href=\'/admin\'"]').click();
    cy.get('[href="#/schools"]').click();
})

Then("m tas jag till sidan register new school", () => {
    cy.get('#react-admin-title > span').should('contain', 'Register New School');
    cy.url().should('contain', 'schools/create')
})

Given("m att fältet {string} är ifyllt med {string}", (field, name) => {
    cy.get(field).type(name);
    cy.get(field).should('have.value', name);
})

And("m jag valt vilken skola som ska tas bort", () => {
    cy.get('[onclick="location.href=\'/admin\'"]').click();
    cy.get('[href="#/schools"]').click();
    cy.wait(500);
    cy.get('[data-testid="NavigateNextIcon"]').click();
    cy.wait(500);

    cy.get('.MuiTableBody-root').contains('Newton').then(($el) => {
        const nthChild = $el.closest('.MuiTableRow-root').index() + 1;
        cy.wait(500).get(`:nth-child(${nthChild}) > .column-name > .MuiTypography-root`)
          .should('be.visible')
          .then(() => {
            cy.get(`:nth-child(${nthChild}) > .column-undefined > .MuiButton-root`).click();
          });
      });
})

Then("m finns inte skolan kvar i listan", () => {
    cy.get('.MuiTableBody-root').should('not.contain', 'Newton');
    cy.get('.MuiSnackbar-root > .MuiPaper-root').should('contain', 'Element deleted');
})

And("m jag är i teacher-tabben", () => {
    cy.get('[onclick="location.href=\'/admin\'"]').click();
    cy.get('[href="#/teachers"]').click();
})



        // Then("m tas jag till create-teacher-sidan", () => {
        //     cy.url().should('contain', 'teachers/create');
        //     cy.get('#react-admin-title > span').should('contain', "Register New Teacher")
        // })

        // And("select", () => {
        //     cy.get('#mui-component-select-roles').click();
        //     cy.get('.MuiList-root > [tabindex="-1"]').click();
        // })
        // And("deselect",() => {
        //     cy.get('body').trigger('keydown', { keyCode: 27});
        //     cy.wait(500);
        //     cy.get('body').trigger('keyup', { keyCode: 27});
        // })
        // And("save",() => {
        //     cy.get('.RaToolbar-defaultToolbar > .MuiButton-root').click();
        // })





    //NEW Gränssnitt!
And("m jag är på admin sidan", () => {
    cy.get('[onclick="location.href=\'/admin\'"]').click();
    cy.url().should('contain', 'admin');
})

And("m det finns en {string} knapp", (buttonName) => {
    cy.get(buttonName).should('be.visible');
})

And("m jag är på dashboard sidan", () => {
    cy.get('.MuiCardHeader-content > .MuiTypography-root').should('contain', 'Welcome to the administration')
})

Then("m tas jag till {string} vyn", (pageName) => {
    cy.url().should('contain', pageName);
})

Given("m jag är på {string} vyn", (pageName) => {
    cy.url().should('contain', pageName);
})

And("m det finns ett {string} fält", (fieldName) => {
    cy.get(fieldName).should('be.visible');
})

Then("m får jag pop-up ruta med texten {string}", (text) => {
    cy.get('.MuiSnackbar-root > .MuiPaper-root').should('contain', text);
})