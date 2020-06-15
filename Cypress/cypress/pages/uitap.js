export class UitapPages {
    constructor() {
        // dynamic button
        this.dynamicButton = ('button.btn')
        this.clickMeLink = ('[title="Click me"]')

        //mouse over
        this.clickMeMouseLeave = ('[title="Active Link"]')
        this.clickCount = ('span[id="clickCount"]')

        //sample app
        this.userNameInput = ('input[name="UserName"]')
        this.passwordInput = ('input[name="Password"]')
        this.loginButton = ('button[id="login"]')
        this.infoLabel = ('label[id="loginstatus"]')
    }

    // dynamic button
    clickButtonWithDynamicID() {
        cy.get(this.dynamicButton).click()
    }

    verifyButtonExist() {
        cy.get(this.dynamicButton).should('exist')
    }

    verifyButtonName(name) {
        cy.contains(this.dynamicButton, name)
    }

    //mouse over
    clickClickMe() {
        cy.get(this.clickMeLink).click()
        cy.get(this.clickMeMouseLeave).trigger('mouseleave')
    }

    verifyClickCountIs(number) {
        cy.contains(this.clickCount, number)
    }

    //sample app
    validateUserNamePlaceholder(text) {
        cy.get(this.userNameInput).should('have.attr', 'placeholder', text)
    }

    validatePasswordPlaceholder(text) {
        cy.get(this.passwordInput).should('have.attr', 'placeholder', text)
    }

    validateLoginText(text) {
        cy.get(this.loginButton).should('have.text', text)
    }

    validateLabelText(text) {
        cy.contains(this.infoLabel, text)
    }

    clickLogin() {
        cy.get(this.loginButton).click()
    }

    enterUserName(name) {
        cy.get(this.userNameInput).type(name)
    }

    enterPassword(password) {
        cy.get(this.passwordInput).type(password)
    }

}