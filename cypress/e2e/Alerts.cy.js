
describe('Alerts', function(){

    //Alert window will be automatically closed by cypress but if we want to work wigth alert then we need to code
    
    //1)Javascript alert: it will have some text and OK button
    it('Js alert', function(){

            cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
            cy.get("[onclick='jsAlert()']").click()

          // Here on() is a method and t stores the alert to handle(this method  is called an event)
            cy.on('window:alert', function(t){

                expect(t).to.contains('I am a JS Alert') //Validation of text on the alert window
            })

            //Alert window automatically closed by cypress
            
            //Validating that we clicked on the alert and it is closed by cypress
            cy.get("#result").should('have.text','You successfully clicked an alert')



    })

   
     //When there ia an alert with ok and cancel button, cypress will automatically close the alert by using ok button 
    //2)Javascript confirm alert: it will have some text with OK and cancel buttons
    it('Js confrim alert - OK button', function(){ //.only() makes only this 'it' block to execute

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("[onclick='jsConfirm()']").click()

      // Here on() is a method and t stores the alert to handle(this method  is called an event)
        cy.on('window:confirm', function(t){

            expect(t).to.contains('I am a JS Confirm') //Validation of text on the alert window
        })

        //Alert window automatically closed by cypress by clicking OK button
        
        //Validating that we clicked on the alert and it is closed by cypress using OK button
        cy.get("#result").should('have.text','You clicked: Ok')


    })

    
    it('Js confrim alert - Cancel button', function(){ //.only() makes only this 'it' block to execute

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("[onclick='jsConfirm()']").click()

      // Here on() is a method and t stores the alert to handle(this method  is called an event)
        cy.on('window:confirm', function(t){

            expect(t).to.contains('I am a JS Confirm') //Validation of text on the alert window
        })

        cy.on('window:confirm', ()=> false) //Now, cypress will close the alert by using 'cancel' button
        
        //Validating that we clicked on the alert and it is closed by cypress using cancel button
        cy.get("#result").should('have.text','You clicked: Cancel')
    })


    //3)Javascript prompt alert: it will contain some text with a textbox for user input along with 'OK' and 'cancel'button
    it('Js prompt alert', function(){ //.only() makes only this 'it' block to execute

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
      
        cy.window().then(function(win){ //This method should run before clicking on alert()(this method is also called an event)

            cy.stub(win,'prompt').returns('welcome') //This will enter value as 'welcome' inside alert textbox
        })
        cy.get("[onclick='jsPrompt()']").click()

        // Here on() is a method and t stores the alert to handle(this method is called an event)
        cy.on('window:prompt', function(t){

            expect(t).to.contains('I am a JS prompt') //Validation of text on the alert window
        })

        //Now cypress will automatically close the alert using 'OK' button
        //Validating that cypress automatically closed the alert using 'OK' button after entering 'welcome' in alert textbox
        cy.get("#result").should('have.text','You entered: welcome')
       
       
        
    })

    //4)Authenticated alert
    it('Authenticated alert', function(){

        //Approach 1
        /*
        cy.visit("https://the-internet.herokuapp.com/basic_auth", { auth: 
                                                                        {username: "admin",
                                                                         password: "admin"
                                                                        }
        })
        //Validation
        cy.get(".example>p").should('have.contain',"Congratulations") //Here ".example>p" can be written as ".example p" also
        */

         //Approach 2
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth") 

        //Validation
        cy.get(".example>p").should('have.contain',"Congratulations") //Here ".example>p" can be written as ".example p" also
        
        //for more info we can check cypress events documents
   
    })
    



})