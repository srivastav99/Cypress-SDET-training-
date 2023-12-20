
/*
cssSelectors types:

tag#id
tag.class
tag[attribute='value']
tag.class[attribute='value']

Note:In all the above 4 types tag is optional
*/
describe('CSSLocators',() =>{

    it("csslocators",() =>{

        cy.visit("http://automationpractice.com/index.php")

        cy.get("#search_query_top").type("T-shirts") //using id
        cy.get("[name='submit_search']").click //using attribute-value

        cy.get(".lighter").contains("T-shirts") //Assertion (using class)

    })
})