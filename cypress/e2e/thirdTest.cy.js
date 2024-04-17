///<reference types="Cypress"/>

describe('Cypress Clearing Fields', () => {
    it('Type and Clear', () => {
      cy.visit('https://practice-automation.com/form-fields/')
      cy.get('#name').type('Stepan')
      cy.wait(2000)
      cy.getById('#name').clear().type('Vasya')
    })
  })