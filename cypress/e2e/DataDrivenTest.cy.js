describe('MyTestSuite', ()=>{

    it('DataDrivenTest', ()=>{

        cy.fixture("orangehrm2").then((data)=>{

            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

            data.forEach( (userdata)=> {
                
                cy.get("[placeholder='Username']").type(userdata.username)
                
                cy.get("[placeholder='Password']").type(userdata.password)

                cy.get("[type='submit']").click()

                if(userdata.username == 'Admin' && userdata.password == 'admin123'){

                    cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
                        .should('have.text', userdata.expected);

                    //logging out to get to login page for next iteration
                    cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
                    cy.wait(2000)
                }
                else{

                    cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text")
                        .should('have.text', userdata.expected)
                }
            });

        })
    })
})