export class Navigation {

    home() {
        cy.visit(Cypress.env('TESTING_BASE_URL'))
    }

    uitapDynamic() {
        cy.visit(Cypress.env('UITAP_BASE_URL') + 'dynamicid')
    }

    uitapMouseOver() {
        cy.visit(Cypress.env('UITAP_BASE_URL') + 'mouseover')
    }

    uitapSampleApp() {
        cy.visit(Cypress.env('UITAP_BASE_URL') + 'sampleapp')
    }

    uitapProgressBar() {
        cy.visit(Cypress.env('UITAP_BASE_URL') + 'progressbar')
    }

    uitapClassAttr() {
        cy.visit(Cypress.env('UITAP_BASE_URL') + 'classattr')
    }





}