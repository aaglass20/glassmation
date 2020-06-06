import {CreditCards} from "../../helpers/creditCards";

const cc = new CreditCards()

describe('Cypress Exanples', function () {
    it('Enter and validate text input', function () {
        `
        Given I am on the TestCafe example homepage
        When enter a name for 'Your Name'
        Then name entered displays in the input box
        `
        cy.visit('https://devexpress.github.io/testcafe/example/')
        cy.get('[id="developer-name"]').type("John Smith")
        cy.get('[id="developer-name"]').should('have.value', "John Smith")
    })

    it('Confirmation modal - Confirm', function () {
        `
        Given I am on the TestCafe example homepage
        When enter a name for 'Your Name'
        And I click and confirm 'Populate' button
        Then the populated name displays
        `
        cy.visit(Cypress.env('TESTING_BASE_URL'))
        cy.get('#populate').click()
        cy.get('[id="developer-name"]').should('have.value', "Peter Parker")
    })

    it.skip('Confirmation modal - Cancel', function () {
        `
        Given I am on the TestCafe example homepage
        When enter a name for 'Your Name'
        And I click and cancel 'Populate' button
        Then the user entered name displays
        `
        cy.visit(Cypress.env('TESTING_BASE_URL'))
        cy.get('#populate').click()
        cy.get('[id="developer-name"]').should('have.value', "Peter Parker")
    })

    it('Validate selected and unselected checkbox input elements', function () {
        `
        Given I am on the TestCafe example homepage
        When I select checkbox input elements
        Then I validate selected and unselected checkbox input elements
        `
        cy.visit(Cypress.env('TESTING_BASE_URL'))
        cy.get('#remote-testing').click()
        cy.get('#tried-test-cafe').click()
        cy.get('#remote-testing').should('be.checked')
        cy.get('#reusing-js-code').should('not.be.checked')
        cy.get('#background-parallel-testing').should('not.be.checked')
        cy.get('#continuous-integration-embedding').should('not.be.checked')
        cy.get('#traffic-markup-analysis').should('not.be.checked')
        cy.get('#tried-test-cafe').should('be.checked')
        cy.get('#reusing-js-code').click()
        cy.get('#reusing-js-code').should('be.checked')
    })

    it('Validate selected and unselected radio input elements', function () {
        `
        Given I am on the TestCafe example homepage
        When I select checkbox input elements
        Then I validate selected and unselected checkbox input elements
        `
        cy.visit(Cypress.env('TESTING_BASE_URL'))
        cy.get('#windows').check()
        cy.get('#windows').should('be.checked')
        cy.get('#macos').should('not.be.checked')
        cy.get('#linux').should('not.be.checked')
        cy.get('#macos').check()
        cy.get('#windows').should('not.be.checked')
        cy.get('#macos').should('be.checked')
        cy.get('#linux').should('not.be.checked')
        cy.get('#linux').check()
        cy.get('#windows').should('not.be.checked')
        cy.get('#macos').should('not.checked')
        cy.get('#linux').should('be.checked')
    })


    it('Switch Case', function () {
        cy.visit(Cypress.env('TESTING_BASE_URL'))
        cy.log('Discover is ' + cc.creditCards("Discover"))
        cy.log('Visa is ' + cc.creditCards("Visa"))
        cy.log('Mastercard is ' + cc.creditCards("Mastercard"))
        cy.log('AmericanExpress is ' + cc.creditCards("AmericanExpress"))
        cy.get('#tried-test-cafe').click()
        cy.get('[data-testid=comments-area]').type("Visa " + cc.creditCards("Visa") + ' Forever')
    })

})

