describe('My First Test', () => {
  it('Gets, types and asserts', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('submit').click()

    cy.get('.action-form')
      .find('[type="text"]').type('HALFOFF')
    
      cy.get('.action-form').submit()
      .next().should('contain', 'Your form has been submitted!')
  })
})