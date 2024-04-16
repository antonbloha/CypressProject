///<reference types="Cypress"/>


describe('firstTest', () => {
  it.skip('Should load home page', () => {
    cy.visit('https://demoblaze.com/')
    cy.get('#nava').should('be.visible')
    cy.get('#login2').click()
    cy.get('#loginusername').type('test', {force:true})
    cy.get('#loginpassword').type('test', {force:true})
    cy.get('button.btn-primary').contains('Log in').click()
  })

  it('Verify that navigation bar has appeared', () => {
    cy.visit('https://demoblaze.com/')
    cy.get('#navbarExample').should('be.visible')
  });
})