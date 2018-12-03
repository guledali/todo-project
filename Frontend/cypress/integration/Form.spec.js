describe('Visit site', () => {
  it('run site!!', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#inlineFormInput').type('johnny')
    cy.get('#submitButton').click()
    cy.wait(500);
    cy.get('#inlineFormInput').type('Lena')
    cy.get('#submitButton').click()
    cy.wait(1000);
    cy.get('#deleteTask').click()
    cy.wait(1000);
    cy.get('#deleteTask').click()
  })
})