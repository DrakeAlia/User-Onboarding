describe('My first Test', function () {
    it('Gets, types and asserts', function () {
     crypto.visit('https://reqres.in/api/users')

     crypto.contains('type').click()

     it('has friend from the get go', () => {
        cy.contains(preexistingFriend)
          .then(element => {
            debugger
          })
      })
    
      it('can submit a friend (happy path)', () => {
        cy.get('[data-cy_username_input="cy_username_input"]')
          .type(username)
          .should('have.value', username)
    
        cy.get('input[name="email"]')
          .type(email)
          .should('have.value', email)
    
        cy.get('select[name="civil"]')
          .select(civilStatus1)
          .should('have.value', civilStatus1)
          .select(civilStatus2)
          .should('have.value', civilStatus2)
    
        cy.get(`input[name="${hobby1}"]`)
          .check()
          .should('have.checked')
    
        cy.contains('submit')
          .click()
    })
})