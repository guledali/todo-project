describe('Visit site', () => {
  it('run site!!', () => {
    cy.visit('http://localhost:3000/');
  });
  it('Adding a task', () => {
    cy.get('[data-testid=inputForm]').type('johnny')
    cy.get('[data-testid=submitButton]').click()
    cy.wait(1000);
  });
  it('Delete a task', () => {
    cy.get('[data-testid=deleteTask]').click()
  });
})