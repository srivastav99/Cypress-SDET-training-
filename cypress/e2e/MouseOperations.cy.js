require ('@4tw/cypress-drag-drop')
import 'cypress-iframe'

describe('Mouse Operations', ()=>{

    it('MouseHover', ()=>{

        cy.visit("https://demo.opencart.com/")

        cy.xpath("//a[text()='Mac (1)']")
        .should('not.be.visible')


        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()

        cy.xpath("//a[text()='Mac (1)']")
            .should('be.visible')

    })

    it('Right click', ()=>{ //Note:This page is not working with cypress

        cy.visit("http://swisnl.github.io/jQuery-contextMenu/demo.html")
        //Approach1
        /*
        cy.get("[class='context-menu-one btn btn-neutral']").trigger('contextmenu')
        cy.get("[class='context-menu-item context-menu-icon context-menu-icon-copy']").should('be.visible')
        */

        //Approach2
        cy.get("[class='context-menu-one btn btn-neutral']").rightclick()
        cy.get("[class='context-menu-item context-menu-icon context-menu-icon-copy']").should('be.visible')


    })

    it('Double click', ()=>{

        cy.visit("https://www.plus2net.com/javascript_tutorial/ondblclick-demo2.php")

       //Approach1 - trigger method
       /*
        cy.get("[value='Click']").trigger('dblclick')
        cy.get("#box").should('have.text', 'This is double click')
        */

        //Approach2 - dblclick method
        cy.get("[value='Click']").dblclick()
        cy.get("#box").should('have.text', 'This is double click')

    })

    it('Drag and Drop using Plugin', ()=>{ //Note:This webpage does not work with cypress

        //For this a plugin is required to be installed using command - npm install --save-dev @4tw/cypress-drag-drop
        //and then we need to add - require ('@4tw/cypress-drag-drop') at the top of file

        cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")


        cy.iframe('.demo-frame').find("#draggable").drag("#droppable")
        cy.get('#box6').should('be.visible')
        cy.get('#box106').should('be.visible')

        cy.wait(2000)

        cy.get('#box6').drag('#box106', {force:true})//{force:true} is to be used only when it gives error sometimes


    })

    it.only('Scrolling page', ()=>{

        cy.visit('https://www.countries-ofthe-world.com/flags-of-the-world.html')
        
        //Scrolling for India flag
        cy.get(':nth-child(1) > tbody > :nth-child(86) > :nth-child(1) > img').scrollIntoView({duration:2000})
        //In the above line duration is not required, we used it just to see the scrolling happen
        cy.get(':nth-child(1) > tbody > :nth-child(86) > :nth-child(1) > img').should('be.visible')

        //Scrolling for Algeria flag
        cy.get(':nth-child(1) > tbody > :nth-child(4) > :nth-child(1) > img').scrollIntoView({duration:2000})
        cy.get(':nth-child(1) > tbody > :nth-child(4) > :nth-child(1) > img').should('be.visible')

        //Scrolling to end of page(find footer section element and scroll till there)
        cy.get("div#footer").scrollIntoView()
    })
})