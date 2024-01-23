 class Login{

    setUsername(username){

        cy.get("[placeholder='Username']").type(username)
    }

    setPassword(password){

        cy.get("[placeholder='Password']").type(password)
    }

    clickSubmit(){

        cy.get("[type='submit']").click()
        cy.con
    }

    verifyLogin(){

        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text', 'Dashboard')
    }
}
export default Login