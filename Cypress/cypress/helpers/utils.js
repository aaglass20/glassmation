export class Utils {

    device(device) {
        let deviceSize = device == undefined ? "iphone-x" : device
        if (Cypress.env("isMobile") === "y") {
            cy.viewport(deviceSize)
            cy.log("Mobile")
        } else {
            cy.log("Desktop")
        }
    }

    clearStorage() {
        indexedDB.deleteDatabase("localforage")
        cy.clearLocalStorage()
    }

    waitTime(wait) {
        if (wait === "SHORT") {
            cy.wait(1000)
        } else if (wait === "NORMAL") {
            cy.wait(3000)
        } else if (wait === "LONG") {
            cy.wait(10000)
        } else if (wait === "MAX") {
            cy.wait(60000)
        } else if (wait === "CUSTOM") {
            cy.wait(90000)
        } else {
            cy.log("no wait")
        }
    }

    reloadPage() {
        cy.reload()
    }

    selectBackBrowser() {
        cy.go("back")
    }

}

/// <reference types="Cypress" />

/**
 * [bdd, tdd] Describe a "suite" that should only run for mobile devices
 * with the given title and callback fn containing nested suites.
 */
export const describeMobile = (title, fn) => {
    if (Cypress.env("isMobile") === "y") {
        describe(title, fn)
    } else {
        describe.skip(title, fn)
    }
}

/**
 * [bdd, tdd] Describe a "suite" that should only run for desktop devices
 * with the given title and callback fn containing nested suites.
 */
export const describeDesktop = (title, fn) => {
    if (Cypress.env("isMobile") !== "y") {
        describe(title, fn)
    } else {
        describe.skip(title, fn)
    }
}

/**
 * Describe a mobile specification or test-case with the given callback fn
 * acting as a thunk. The name of the function is used as the name of the test.
 */
export const itMobile = (title, fn) => {
    if (Cypress.env("isMobile") === 'y') {
        it(title, fn)
    } else {
        it.skip(title, fn)
    }
}

/**
 * Describe a desktop specification or test-case with the given callback fn
 * acting as a thunk. The name of the function is used as the name of the test.
 */
export const itDesktop = (title, fn) => {
    if (Cypress.env("isMobile") !== "y") {
        it(title, fn)
    } else {
        it.skip(title, fn)
    }
}
