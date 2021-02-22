const APP_URL = process.env.APP_URL || 'http://localhost:8080'

describe('Home', () => {
  it('It should render create account modal when click cta create account button', () => {
    cy.visit(APP_URL)

    cy.get('#cta-create-account-button').click()

    cy.get('#modal-create-account')
  })

  it('It should render create account modal when click cta create account button', () => {
    cy.visit(APP_URL)

    cy.get('#header-create-account-button').click()

    cy.get('#modal-create-account')
  })

  it('It should render login modal when click cta login', () => {
    cy.visit(APP_URL)

    cy.get('#header-login-button').click()

    cy.get('#modal-login')
  })

  it('It should login with email and password', () => {
    cy.visit(APP_URL)

    cy.get('#header-login-button').click()

    cy.get('#modal-login')

    cy.get('#email-field').type('igor@igor.me')
    cy.get('#password-field').type('1234')
    cy.get('#submit-button').click()

    cy.url().should('include', '/feedbacks')
  })

  it('It should an error with an invalid email', () => {
    cy.visit(APP_URL)

    cy.get('#header-login-button').click()

    cy.get('#modal-login')

    cy.get('#email-field').type('igor@igor.com')
    cy.get('#password-field').type('1234')
    cy.get('#submit-button').click()

    cy.get('#email-error')
  })

  it('It should logout', () => {
    cy.visit(APP_URL)

    cy.get('#header-login-button').click()

    cy.get('#modal-login')

    cy.get('#email-field').type('igor@igor.com')
    cy.get('#password-field').type('1234')
    cy.get('#submit-button').click()

    cy.url().should('include', '/feedbacks')
    cy.get('#logout-button').click()
    cy.url().should('include', '/')
  })
})
