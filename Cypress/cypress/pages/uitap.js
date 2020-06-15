export class UitapPages {
    constructor() {
        this.dynamicButton = ('button.btn')
        this.clickMeLink = ('[title="Click me"]')
        this.clickMeMouseLeave = ('[title="Active Link"]')
        this.clickCount = ('span[id="clickCount"]')
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

    clickClickMe(){
        cy.get(this.clickMeLink).click()
        cy.get(this.clickMeMouseLeave).trigger('mouseleave')
    }

    verifyClickCountIs(number){
        cy.contains(this.clickCount, number)
    }

}