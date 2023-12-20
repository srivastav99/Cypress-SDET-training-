describe('handle dropdowns', function(){

    it.skip('dropdown with select', function(){ //.skip skips the test

        cy.visit("https://www.bstackdemo.com/")
        
        cy.xpath("//select")
            .select('Lowest to highest')
            .should('have.value','lowestprice')
        

    })

    it.skip('dropdown without select', function(){//.skip skips the test

        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        
        cy.get("#select2-billing_country-container").click()
        cy.get(".select2-search__field").type("Italy") .type('{enter}')//can be written as cy.get(".select2-search__field").type("Italy{enter}")

        cy.get("#select2-billing_country-container")
            .should('have.text','Italy')
           
        

    })

    it.skip('Auto sugegst dropdown', function(){//.skip skips the test

        cy.visit("https://www.wikipedia.org/")
        
        cy.get("[name='search']").type("Delhi") 

        cy.get('h3.suggestion-title').contains('Delhi University').click()
       
           
        

    })


    it('Dynamic dropdown', function(){

        cy.visit("https://www.google.com/")
        
        cy.get("#APjFqb").type("cypress automation") 
        cy.wait(3000)
       
        cy.get("div.wM6W7d>span").should('have.length',12)

       //Below is a jquery function(.each is used in cypress to handle lists, here the list that .get() returns
       //is stoted in '$list' and the 'index' element from '$list' is stored in '$ele' and then we iterate through each 
       //$ele and check with if condition to click on the desired search result, here we cannot directly use
       //.click() we need to use wrap($ele) to click the required element; for more info check cypress documentation for each())
        cy.get("div.wM6W7d>span").each(function($ele, index, $list){//div.wM6W7d>span -- cssSelector - '>' represents child node(span is child node)

            if($ele.text()=='cypress automation tutorial'){
                
                cy.wrap($ele).click()
            }

         })

         cy.get("#APjFqb").should('have.value','cypress automation tutorial')

        

    })
})