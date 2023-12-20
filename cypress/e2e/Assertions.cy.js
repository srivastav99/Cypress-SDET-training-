
describe("Assertions demo", function(){

    it("Implicit assertions", function(){

    //Implicit assertions or built-in assertions - should(), and() (these methods support keys like eq,contain,include,exist,have.value,have.length)

       
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        /*
        cy.url().should('include','orangehrmlive.com')
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('contain','orangehrm')//contain and include does the same thing
        */
        //or
        /*
        cy.url()
            .should('include','orangehrmlive.com')
            .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            .should('contain','orangehrm')
        */
        //or
        cy.url().should('include','orangehrmlive.com')
            .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            .and('contain','orangehrm')
            .and('not.contain','greenhrm')//negative assertions

        cy.title().should('include','Orange')
            .and('eq','OrangeHRM')
            .and('contain','HRM')

        cy.get('.orangehrm-login-branding > img').should('be.visible')
            .and('exist')

        cy.xpath("//a").should('have.length','5')//xpath will get all the links in the page and we are checking if 5 links are present or not in the page

        cy.get("[placeholder='Username']").type('Admin')//providing a value into input textbox
        cy.get("[placeholder='Username']").should('have.value','Admin')

    })

    it('Explicit assertions', function(){

     //Explicit assertions or custom made assertions - expect()(used in BDD approach), assert()(used in TDD approach)
        
         cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
         cy.get("[placeholder='Username']").type('Admin')//providing a value into input textbox
         cy.get("[placeholder='Password']").type('admin123')//providing a value into input textbox
         cy.get("button[type='submit']").click()

         let expName = "Ashneer Grover" //Making a variable expName and storing a value in it

         // Below is a javascript function
         cy.get(".oxd-userdropdown-name").then( function(x){

                let actName = x.text() //Making a variable actName and storing a value in it

                //BDD Style(expect)
                expect(actName).to.equal(expName)//Explicit Assertion(BDD style)
                expect(actName).to.not.equal(expName)//Explicit Assertion(BDD style)
                
                //TDD Style(assert)
                assert.equal(actName,expName)//Explicit Assertion(TDD style)
                assert.notEqual(actName.expName)//Explicit Assertion(TDD style)
               

         })


       
    })
    
    
})