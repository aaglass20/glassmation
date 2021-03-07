// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

beforeEach(() => {
  if (Cypress.env("isMobile") === "y") {
    cy.viewport("iphone-x")
    cy.log("Mobile")
  } else {
    cy.log("Desktop")
  }
})

//Cypress clears cookies but not localforage between runs. Adding will "clean slate" between runs
indexedDB.deleteDatabase("localforage")