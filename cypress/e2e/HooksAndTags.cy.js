describe('MyTestSuite', ()=>{

/*
Hooks:
before : hook will be executed first in the test suite, executes once, before all it() blocks are executed
after : hook will be executed last in the test suite, executes once, after all it() blocks are executed
beforeEach : hook will be executed before each it() block executes
afterEach : hook will be executed after each it() block executes
*/

/*
Tags:
.skip : that particular it() block gets skipped(does not get executed)
.only : only that particular it() block gets executed and all other it() blocks in the test suite gets ignored
*/

    before(()=>{

        cy.log("***** Launch app *****")
    })

    after(()=>{

        cy.log("***** close app *****")
    })

    beforeEach(()=>{

        cy.log("***** Login *****")
    })

    afterEach(()=>{

        cy.log("***** Logout *****")
    })
    
    it('Search', ()=>{

        cy.log("***** searching *****")
    })

    it.skip('advanced search', ()=>{

        cy.log("***** advanced searching *****")
    })

    it.only('listing Products', ()=>{

        cy.log("***** Listing products *****")
    })
})