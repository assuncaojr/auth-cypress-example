describe('<Auth />', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('Should render Auth component', () => {
    cy.contains('Login').should('to.have.length', 1);
    cy.get('[data-cy=logo]').should('to.have.length', 1);
    cy.get('[data-cy=btn-submit]').should('be.disabled');
  });

  it('Should fill form, submit it and fail on authentication', () => {
    const email = 'email@fake.com'
    const password = '123456'

    cy.get('[data-cy=input-email').type(email);
    cy.get('[data-cy=input-password').type(password);
    cy.get('[data-cy=btn-submit]').click();

    cy.contains('Email ou senha inválidos. Por favor, tente novemente.');
  });

  it('Should fill form, submit it and get success on authentication', () => {
    const email = 'me@email.com'
    const password = '123'

    cy.get('[data-cy=input-email').type(email);
    cy.get('[data-cy=input-password').type(password);
    cy.get('[data-cy=btn-submit]').click();

    cy.contains('Registros');
    cy.contains('Usuários');
  });

  it('Should crate a new user', () => {
    /** Auth */
    cy.get('[data-cy=input-email').type('me@email.com');
    cy.get('[data-cy=input-password').type('123');
    cy.get('[data-cy=btn-submit]').click();

    /** Fill register form */
    const name = 'Pedro Rafael';
    const email = 'pedro@rafael.com';

    cy.get('[data-cy=input-user-name').type(name);
    cy.get('[data-cy=input-user-email').type(email);
    cy.get('[data-cy=btn-user-submit]').click();

    /** Search by recently created user  */
    cy.get('[data-cy=tr-user-row').should('to.have.length', 6);
    cy.contains(name).should('to.have.length', 1);
    cy.contains(email).should('to.have.length', 1);
  });
});
