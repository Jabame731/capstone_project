describe('Login User', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/login');
  });

  it('should successfully log in with valid credentials', () => {
    cy.get('#email').type('sandrafaith@gmail.com');
    cy.get('#password').type('12345');
    cy.get('button[type="submit"]').click();

    cy.url().should('eq', 'http://localhost:3000/');
  });

  it('should display an error message for invalid credentials', () => {
    cy.get('#email').type('wrong_email@gmail.com');
    cy.get('#password').type('wrong_password');
    cy.get('button[type="submit"]').click();

    cy.get('.Toastify__toast-body').should('contain', 'Opps Error Occured');
  });

  it('should navigate to the registration page when clicking on the registration link', () => {
    cy.contains('No account?').find('a').click();
    cy.url().should('eq', 'http://localhost:3000/register');
  });
});
