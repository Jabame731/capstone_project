describe('logged in a mock user to get its user-id and visit the edit page of the user in Smart Parking', () => {
  it('this test should visit edit page successfully', () => {
    cy.request('POST', 'http://localhost:8800/api/auth/login', {
      email: 'billiealindao10@gmail.com',
      password: '12345',
    }).then((response) => {
      const userInfo = response.body;
      const { uniqueId, email } = userInfo;

      cy.visit(`http://localhost:3000/edit-profile/${uniqueId}`);
      cy.get('[data-cy="data-for-email"]').type(email, { force: true });
      cy.get('[data-cy="edit-first_name"]').type('Jane');
      cy.get('[data-cy="edit-last_name"]').type('Ceyes');
      cy.get('[data-cy="edit-address"]').type('Cebu City, Lilo-an');
      cy.get('[data-cy="edit-phone_number"]').type('123456');
      cy.get('[data-cy="edit-telephone_number"]').type('09123456789');
      cy.get('[data-cy="submit"]').click();
    });
  });
});
