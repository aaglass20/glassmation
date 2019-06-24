import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";

Given('I am on the testing page', () => {
    cy.visit('https://devexpress.github.io/testcafe/example/')
})

When('I enter a name for {string}', (name) => {
    cy.get('[id="developer-name"]').type(name)
})

When('{string} will display in the input box', (name) => {
    cy.get('[id="developer-name"]').should('have.value', name)
})

