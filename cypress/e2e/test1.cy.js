///<reference types="cypress"/>

it('Google Search', function(){//for creating a function in place of function() we can also write () =>

    cy.visit("https://www.google.com/")
    cy.get('#APjFqb').type("Automation Step by Step{Enter}")
  //  cy.contains('Google Search').click()
    cy.contains('Videos').click()
})