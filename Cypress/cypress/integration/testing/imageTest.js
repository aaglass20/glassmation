it('toMatchImageSnapshot - element', () => {
    cy.visit('https://www.google.com/')
        .then(() => {
            cy.get('#lga')
                .toMatchImageSnapshot();
        });
});

it.only('toMatchImageSnapshot - whole page', () => {
    cy.visit('https://www.google.com/')
        .then(() => {
            cy.document()
                .toMatchImageSnapshot({threshold: 0.1, "createDiffImage": true});
        });
});