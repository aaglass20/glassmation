export class TestExamplesPage {
    constructor() {
        this.yourNameInput = ('[id="developer-name"]')
        this.populateButton = ('#populate')
    }

    enterName(name) {
        cy.get(this.yourNameInput).type(name)
    }

    validateNameEntered(name) {
        cy.get(this.yourNameInput).should('have.value', name)
    }

    clickPopulateButton() {
        cy.get(this.populateButton).click()
    }


}