describe('Home Page Test', () => {
  it('Visits the home page', () => {
    // Act
    cy.visit('/');

    // Assert
    cy.contains('Welcome to Meteor!');
  });
});
