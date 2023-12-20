describe("Check UI Elements", function(){

    /*
    it("Checking Radio Buttons", function(){

        cy.visit("https://testautomationpractice.blogspot.com/")

        //Checking visibility of radio buttons
        cy.get("#male").should('be.visible')
        cy.get("#female").should('be.visible')

        //selecting radio buttons
        cy.get("#male").check().should('be.checked')//Here .check() clicks the radio button
        cy.get("#female").should('not.be.checked')//Since we selected male radio button, female radio button should not be selected

        cy.get("#female").check().should('be.checked')//Here .check() clicks the radio button
        cy.get("#male").should('not.be.checked')//Since we selected female radio button, male radio button should not be selected





    })
    */
    it("Checking Check Buttons", function(){

        cy.visit("https://testautomationpractice.blogspot.com/")

        //Checking visibility of checkbox
        cy.get("#sunday").should('be.visible')
        

        //selecting single checkbox
        cy.get("#sunday").check().should('be.checked')//Here .check() clicks(selects) the checkbox

        //de-selecting single checkbox
        cy.get("#sunday").uncheck().should('not.be.checked')//Here .uncheck() clicks(de-selects) the checkbox
        
        //Selecting all the checkboxes
        cy.get(".form-check-input[type='checkbox']").check().should('be.checked')//Here .get() returns 7 elements and .check() will select all the 7 checkboxes(.get() is used for getting single as well as multiple elements in cypress)
        cy.get(".form-check-input[type='checkbox']").uncheck().should('not.be.checked')//Here .get() returns 7 elements and .uncheck() will de-select all the 7 checkboxes(.get() is used for getting single as well as multiple elements in cypress)
        
        //Selecting first and last checkbox
        cy.get(".form-check-input[type='checkbox']").first().check().should('be.checked')
        cy.get(".form-check-input[type='checkbox']").last().check().should('be.checked')
      




    })
})