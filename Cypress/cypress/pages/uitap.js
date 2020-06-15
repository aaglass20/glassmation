export class UitapPages {
    constructor() {
        this.dynamicButton = ('button.btn')
        this.populateButton = ('#populate')
    }

    clickButtonWithDynamicID() {
        cy.get(this.dynamicButton).click()
    }

    verifyButtonExist() {
        cy.get(this.dynamicButton).should('exist')
    }

    verifyButtonName(name) {
        cy.contains(this.dynamicButton, name)
    }

}