describe('Register', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/register');
  });

  it('should successfully register with valid credentials', () => {
    cy.get('#email').type('data_dummy1234@gmail.com');
    cy.get('#password').type('pass_12345');
    cy.get('#confirmPassword').type('pass_12345');
    cy.get('#first_name').type('John');
    cy.get('#last_name').type('Doe');
    cy.get('#address').type('123 Main St');
    cy.get('#phone_number').type('0987654321');
    cy.get('#telephone_number').type('12345678');
    cy.get('button[type="submit"]').click();

    cy.url().should('eq', 'http://localhost:3000/login');
    cy.get('.Toastify__toast-body').should('contain', 'You are Registered');
  });

  it('should display an error message when passwords do not match', () => {
    cy.get('#email').type('test_for_invalid_pass@gmail.com');
    cy.get('#password').type('password_first');
    cy.get('#confirmPassword').type('password_second');
    cy.get('button[type="submit"]').click();

    cy.get('.Toastify__toast-body').should(
      'contain',
      'Oops! Passwords do not match. Please try again.'
    );
  });

  it('should navigate to the login page when clicking on the login link', () => {
    cy.contains('Got an account?').find('a').click();
    cy.url().should('eq', 'http://localhost:3000/login');
  });
});
