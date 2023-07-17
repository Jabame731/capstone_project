describe('Reservation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/login');

    cy.get('input[name="email"]').type('billiealindao10@gmail.com');
    cy.get('input[name="password"]').type('12345');
    cy.get('button[type="submit"]').click();

    cy.contains('Parking Spot').click();

    cy.intercept('GET', 'http://localhost:8800/parkingLot/getParkingLotLists');

    cy.reload();

    cy.get('[data-cy="parking_space"]').first().click();
  });

  it('navigates to reserve parking slot page and reserve a parking slot', () => {
    cy.get('.text-white')
      .eq(0)
      .within(() => {
        cy.contains('Available').click();
      });

    cy.url().should('include', 'http://localhost:3000/reserve-parking-slot/2');
    cy.get('input[name="vehicle_name"]').type('My Car');
    cy.get('input[name="start_date"]').type('2023-07-15');
    cy.get('input[name="start_time"]').type('09:00');
    cy.get('input[name="end_date"]').type('2023-07-15');
    cy.get('input[name="end_time"]').type('12:00');

    cy.get('[data-cy="submit"]').click();

    cy.contains('successfully book parking slot').should('exist');

    cy.url().should('eq', 'http://localhost:3000/');
    cy.get('.Toastify__toast-body').should(
      'contain',
      'successfully book parking slot'
    );
  });
});
