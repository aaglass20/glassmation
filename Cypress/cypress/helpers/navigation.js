export class Navigation {

    home() {
        cy.visit(Cypress.env('TESTING_BASE_URL'))
    }

}