describe('Handle Tables', ()=>{

   //This is one of the hooks blocks in cypress(beforeEach())
    beforeEach('Login', ()=>{

        cy.visit("https://demo.opencart.com/admin/index.php")
        cy.get('#input-username').type("demo")
        cy.get('#input-password').type("demo")
        cy.get("[type='submit']").click()

        cy.get(".btn-close").click()//Closing a pop-up

        //Now navigating to customers --> customers
        cy.get("#menu-customer a.parent").click() //customers main menu
        cy.get("#collapse-5 li:first-child a").click()
       

    })

    it.skip('Check number of rows and columns', ()=>{

        cy.get("[class='table table-bordered table-hover'] tbody tr").should('have.length', 10)
        cy.get("[class='table table-bordered table-hover'] thead tr td").should('have.length', 7)

    })

    it.skip('Check cell data from specific row and column', ()=>{

        cy.get("[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)")
            .contains('hfgjhgjgjggj@gmail.com')
    })

    it.skip('Read all the rows and columnns data in the first page', ()=>{

        //Here first each block itertors rows of table and second each block iteration columns of each row 
        cy.get("[class='table table-bordered table-hover'] tbody tr")
            .each( ($row, index, $rows)=>{ //here $rows represents list of all the rows we get, index is index of rows which keeps iterating and each row will be stored in $row through the iteration

                cy.wrap($row).within( ()=>{

                    cy.get("td").each( ($col, index, $cols)=>{//here $cols represents list of all the cols we get, index is index of cols which keeps iterating and each col will be stored in $col through the iteration

                        cy.log($col.text())//from each column of the table we are reading the text value
                    })
                })
            })

    })

    it('Pagination', ()=>{
        //This method is for Going to each page of the table(if table is large and depicted in multiple pages) and getting the required values
        /*
        //find total no.of pages
        let totalPages;
        cy.get("[class='col-sm-6 text-end']").then( (e)=>{

            let mytext = e.text();
            //now mytext contains - Showing 1 to 10 of 16892 (1690 Pages)
            //now we need to extract no.of pages(1690) from mytext
            totalPages = mytext.substring( mytext.indexOf( "(" )+1, mytext.indexOf( "Pages" )-1)
            //now totalPages contains 1690
            cy.log("Total number of pages in the table=====>"+totalPages)
        })
        */
       let totalPages = 5 //here we are taking only 5 pages instead for all the pages we can comment out the above code and run(migth have to typecast totalPages to int)

       for(let p=1;p<=totalPages;p++){

            if(totalPages>1){

                cy.log("Active Page is====>"+p)

                cy.get("ul.pagination>li:nth-child("+p+")").click()
                cy.wait(3000)

                cy.get("[class='table table-bordered table-hover'] tbody tr")
                    .each( ($row, index, $rows)=>{

                        cy.wrap($row).within( ()=>{

                            cy.get( 'td:nth-child(3)').then( (e)=>{ //3 because we are trying to get email address column
                                cy.log(e.text())//getting email address
                            })
                        })
                    })



            }
       }
    })

})