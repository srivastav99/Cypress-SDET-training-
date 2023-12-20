import 'cypress-iframe'

describe('handling frames', function(){

        it('Approach1', function(){

            cy.visit('https://the-internet.herokuapp.com/iframe')

            const iframe = cy.get("#mce_0_ifr")
                .its('0.contentDocument.body')//here 0.contentDocument because we have only one document inside that frame
                .should('be.visible') //validating if frame is present or not
                .then(cy.wrap) //we are wrapping the entire frame

                iframe.clear().type("Welcome {ctrl+a}")//entering a value in textbox that is inside iframe by clearing it first and then selecting all the text to make it bold in next step

                cy.get("[aria-label='Bold']").click()
        })
        
        //Second appraoch we need to write some code in commands.js file
        it('Approach2 - by using custom command', function(){

            cy.visit('https://the-internet.herokuapp.com/iframe')

            //here getIframe is a custom method we created in commands.js file to get iframe of a page        
            cy.getIframe("#mce_0_ifr").clear().type("Welcome {ctrl+a}")

            cy.get("[aria-label='Bold']").click()
        })
        

        it.only('Approach3 - by using cypress iframe plugin', function(){
            //for this we first need to install a plugin by running following command(npm install -D cypress-iframe) in the terminal-only once we need to do this per project
           //next we need to import 'cypress-iframe' in the file
            cy.visit('https://the-internet.herokuapp.com/iframe')

            cy.frameLoaded('#mce_0_ifr') //This is a in in-built method of cypress-iframe which loads the frame(switch to frame)
            // The above line is just moving to frame after that we have to find element and perform action
            //For that we have to write like  cy.frameLoaded('').find(enter cssselctor here)
            cy.iframe('#mce_0_ifr').clear().type("Welcome {ctrl+a}")
            cy.get("[aria-label='Bold']").click()
        })

})