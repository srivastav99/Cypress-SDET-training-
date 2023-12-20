describe('My First Test', function(){ //This is like a test suite(describe())

    it('verify title-positive',function(){ //This is like a testcase(it())
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq','OrangeHRM')
    })

    it('verify title-negative',function(){ //This is like a testcase(it())
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq','OrangeHRM123')
    })
})