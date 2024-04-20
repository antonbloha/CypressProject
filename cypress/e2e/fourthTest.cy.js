///<reference types="Cypress"/>

describe('Forms, Buttons & Checkbox', () => {
    it('Submit And Assert Froms', () => {

        cy.visit('https://practice-automation.com/form-fields/')
        cy.url().should('contain','practice')

        cy.get('h1[itemprop = "headline"]').should('contain','Form Fields')
        cy.get('#name').type('Vasya')

        cy.contains('Water').click()
        cy.contains('Blue').click()

        cy.get('[data-cy = "email"]').type('stepan@gmail.com')
        cy.get('#message').type('I like cypress')
        
        cy.contains('Submit').click()
    })
})