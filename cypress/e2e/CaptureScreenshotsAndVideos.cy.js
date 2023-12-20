describe('mysuite', ()=>{
    //All the screenshots will be saved in screenshots folder and videos will be saved inside video folder
    //Normally when we run tests from terminal, cypress automatically captures sc when test fails
    it('Capture screenshots & Videos', ()=>{
        
        cy.visit("https://demo.opencart.com/")
        /*
        cy.screenshot("homepage")//Capturing screenshot of a entire page with name as homepage
        cy.wait(2000)
        cy.get("[title='Your Store']").screenshot("logo")//Capturing screenshot of a particular element
        */

        //Automatically capture screenshot and video on failure -  only when we execute through CLI(cmd or terminal)
        cy.get("li:nth-child(7)>a:nth-child(1)").click()
        cy.get('#content>h2').should('have.text','Tablets')//Wantedly we are failing the test here to get screenshot


    })
})