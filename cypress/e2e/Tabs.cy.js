
describe('Handle tabs', function(){

    it.skip('Approach1', function(){
        //In this approach we are opening the new window in the same page by removing target attribute from html of page
        cy.visit('https://the-internet.herokuapp.com/windows')

        cy.get(".example a").invoke('removeAttr','target').click()//Here we are removing the attribute targer from html code of webpage so that the link opens in the same page and not in a new page

        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')//validating if page navigated to child page
        cy.wait(3000)
        //operations
        cy.go('back')//This lines is used to go back to parent tab from child tab
        cy.url().should('include', 'https://the-internet.herokuapp.com/windows')//validating if page navigated back to parent page
        
    })

    it('Approach2', function(){
        //In this approach we will capture href value containing the link to new winddow(target page URL) and use cy.visit to open that page(here also we are opening the link in same page like approach 1)
        //Here for this approach to work, the main domain(https://the-internet.herokuapp.com/)should be same for parent and child pages
        cy.visit('https://the-internet.herokuapp.com/windows')

       /*Below we trying to get value of href attribute and for that we have take a jquery then() where we 
       passed e as parameter which stores the web element(found by using ".example a"cssselector),
        to get href attribute value we use a cypress method prop() and then store it in a variable called url
        and then we open that url using cy.visit()
       */
        cy.get(".example a").then(function(e){

            let url = e.prop('href')
            cy.visit(url)
        })
        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')//validating if page navigated to child page
        cy.wait(3000)
        //operations
        cy.go('back')//This lines is used to go back to parent tab from child tab
        cy.url().should('include', 'https://the-internet.herokuapp.com/windows')//validating if page navigated back to parent page
        
    })
})