describe('MyTestSuite', ()=>{

    //Direct access
    it.skip('FixturesDemoTest', ()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.fixture('orangehrm').then( (data)=>{   //Giving file extention is optional

            cy.get("[placeholder='Username']").type(data.username)

            cy.get("[placeholder='Password']").type(data.password)

            cy.get("[type='submit']").click()

            cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
                .should('have.text', data.expected)
        })

    })

    //Access through HooK - for multiple it blocks
    let userdata
    before( ()=>{
        cy.fixture("orangehrm").then( (data)=>{

            userdata = data
        })
    })
    
    it('FixtureDemoTest', ()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get("[placeholder='Username']").type(userdata.username)

        cy.get("[placeholder='Password']").type(userdata.password)

        cy.get("[type='submit']").click()

        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
            .should('have.text', userdata.expected)
    })
})