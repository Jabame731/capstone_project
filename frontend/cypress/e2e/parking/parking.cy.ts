describe('ParkingLot', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/login');

    cy.get('input[name="email"]').type('billiealindao10@gmail.com');
    cy.get('input[name="password"]').type('12345');
    cy.get('button[type="submit"]').click();

    cy.contains('Parking Spot').click();
  });

  it('renders parking lots correctly', () => {
    cy.intercept('GET', 'http://localhost:8800/parkingLot/getParkingLotLists');
  });

  it('shows parking spaces after clicking on a parking lot', () => {
    cy.get('[data-cy="parking_space"]').first().click();

    cy.get('.bg-white').should('exist');
  });
});
