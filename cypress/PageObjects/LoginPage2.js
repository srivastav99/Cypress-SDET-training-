 class Login{

    txtUsername = "[placeholder='Username']"
    txtPassword = "[placeholder='Password']"
    btnSubmit = "[type='submit']"
    lbl = ".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module"
    
    setUsername(username){

        cy.get(this.txtUsername).type(username)
    }

    setPassword(password){

        cy.get(this.txtPassword).type(password)
    }

    clickSubmit(){

        cy.get(this.btnSubmit).click()
    }

    verifyLogin(){

        cy.get(this.lbl).should('have.text', 'Dashboard')
    }
}
export default Login