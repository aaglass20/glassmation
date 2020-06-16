import 'cypress-wait-until';

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

        //progress bar
        this.startButton = ('button[id="startButton"]')
        this.stopButton = ('button[id="stopButton"]')
        this.progressBar = ('div[id="progressBar"]')

        //classAttr
        this.blueButton = ('button.btn-primary')
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

    //progress bar
    clickStartButton() {
        cy.get(this.startButton).click()
    }

    waitUntilProgressBar(percent) {
        cy.waitUntil(() => cy.get(this.progressBar).then(value => value.text() === percent), {
            errorMsg: 'Progress Bar did not reach 100% before timeout',
            timeout: 60000,
            interval: 1000
        });
    }

    clickButtonVerifyAlert(alert) {
        const stub = cy.stub()
        cy.on('window:alert', stub)
        cy.get(this.blueButton).click()
            .then(() => {
                expect(stub.getCall(0)).to.be.calledWith(alert)
            })
    }

}