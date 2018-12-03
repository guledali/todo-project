describe('Visit site', () => {
  it('run site!!', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-testid=inputForm]').type('johnny')
    cy.get('#submitButton').click()
    cy.wait(1000);
    cy.get('#inlineFormInput').type('Lena')
    cy.get('#submitButton').click()
    cy.wait(1000);
    cy.get('#deleteTask').click({ force: true })
    cy.wait(1000);
    cy.get('#deleteTask').click({ force: true })
    cy.wait(1000);
    cy.get('#deleteTask').click({ force: true })
    cy.wait(1000);
    cy.get('#deleteTask').click({ force: true })
  })
})