import Login from "../PageObjects/LoginPage2"

describe('pom', ()=>{

    //General approach
    it('LoginTest', ()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("[placeholder='Username']").type("Admin")
        cy.get("[placeholder='Password']").type("admin123")
        cy.get("[type='submit']").click()
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text', 'Dashboard')


    })

    //using page object model
    it('LoginTest', ()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        
        const ln = new Login()
        ln.setUsername('Admin')
        ln.setPassword('admin123')
        ln.clickSubmit()
        ln.verifyLogin()

    })

    //using page object model with fixtures
    it.only('LoginTest', ()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        
        cy.fixture('orangehrm').then( (data)=>{

            const ln = new Login()
            ln.setUsername(data.username)
            ln.setPassword(data.password)
            ln.clickSubmit()
            ln.verifyLogin()
        })
        
        

    })

})