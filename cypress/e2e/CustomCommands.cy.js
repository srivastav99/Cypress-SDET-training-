//clicking on link using label(linktext)
//over writing existing command
//re-usable custom command

describe('Custom commands', ()=>{

    it("handling links", ()=>{

        cy.visit("https://demo.nopcommerce.com/")

        //direct appraoch(without using custom command)
        //cy.get(".product-title>[href='/apple-macbook-pro-13-inch']").click()

        //using custom command
        cy.clickLink("Apple MacBook Pro 13-inch")
        cy.get(".product-name>h1").should("have.text","Apple MacBook Pro 13-inch")
        
    })
    //Note: This method as per tutorial - Not working
    it("overwriting existing command", ()=>{

        cy.visit("https://demo.nopcommerce.com/")

        //using custom command
        cy.clickLink("APPLE MACBOOK PRO 13-inch")
        cy.get(".product-name>h1").should("have.text","Apple MacBook Pro 13-inch")
        
    })

    it.only('Login command', ()=>{

        cy.visit("https://demo.nopcommerce.com/")

        //using custom command
        cy.clickLink("Log in") 

        //using custom made command loginapp
        cy.loginapp("srivastavztoh@gmail.com","Srivastav@99")
       
        cy.get('.ico-account').should('have.text', 'My account')

    })
})