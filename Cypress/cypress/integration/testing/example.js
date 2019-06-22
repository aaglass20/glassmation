describe('Cypress Exanples', function () {
    it('Example #1', function () {

        cy.visit('https://devexpress.github.io/testcafe/example/')
        cy.get('[id="developer-name"]').type("John Smith")
        cy.get('[id="developer-name"]').should('have.value', "John Smith")
    })

})