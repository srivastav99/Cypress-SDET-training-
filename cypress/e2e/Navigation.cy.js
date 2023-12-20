describe('mysuite', ()=>{

    it('NavigationTest', ()=>{

        cy.visit("https://demo.opencart.com/")
        cy.title().should('eq', 'Your Store')//in Home Page

        cy.get("li:nth-child(7)>a:nth-child(1)").click()
        cy.get('#content>h2').should('have.text','Cameras')//In cameras page

        cy.go('back')//go to home page
        cy.title().should('eq', 'Your Store')

        cy.go('forward') //go to cameras page
        cy.get('#content>h2').should('have.text','Cameras')

        cy.go(-1)//go to home page
        cy.title().should('eq', 'Your Store')

        cy.go(1)//go to cameras age
        cy.get('#content>h2').should('have.text','Cameras')

        cy.reload()//to reload the page
    })
})