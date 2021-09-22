// julien.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('Test de Julien', () => {
    it('Se connecter au site', () => {
        cy.visit('http://harmony.barbec.tk/')
    })

    it('Homepage ?', () => {
        cy.get('h1').should('have.text', "T'as reconnu l'équipe :")
    })

    it('Test form', () => {
        cy.get('.new-member').type('Cypress')
        cy.get('.new-occupation').type('Testing bot')
        cy.get('.new-submit').click()
        cy.get('li').last().should('have.text', "Cypress - Testing bot")

    })
})