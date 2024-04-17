///<reference types="Cypress"/>


describe('Cypress Modals', () => {
    it('Open and Assert Modal', () => {
      cy.visit('https://practice-automation.com/modals/')
      cy.get('#simpleModal').click()
      
      cy.get('#pum_popup_title_1318').contains('Simple Modal').should('be.visible')
      cy.get('div[id= "popmake-1318"] button[aria-label="Close"]').click()
    })
  })