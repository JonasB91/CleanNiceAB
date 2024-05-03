describe('Navigation', () => {
  it('should navigate to About page from Home page', () => {
    // Visit the home page
    cy.visit('http://localhost:5173/');

    // Click on the About link
    cy.contains('About').click();

    // Assert that the URL has changed to the About page
    cy.url().should('eq', 'http://localhost:5173/About');
  });
});
it('should navigate to Booking page from Home page', () => {
  // Visit the home page
  cy.visit('http://localhost:5173/');

  // Click on the About link
  cy.contains('Work').click();

  // Assert that the URL has changed to the About page
  cy.url().should('eq', 'http://localhost:5173/Booking');
});

it('should navigate to Contact page from Home page' , () => {
  cy.visit('http://localhost:5173/');
  cy.contains('Contact').click();
  cy.url().should('eq', 'http://localhost:5173/Contact')
});

it('should navigate to Login page from Home page' , () => {
  cy.visit('http://localhost:5173/');
  cy.contains('Login').click();
  cy.url().should('eq', 'http://localhost:5173/Login')
});