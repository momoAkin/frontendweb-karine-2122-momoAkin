describe('mijn eerste test', ()=> {
    it('doet niet veel' , () =>{
        expect(true).to.equal(true);
    });

    it('draait de applicatie', () =>{
        cy.visit('http://localhost:3000/about/');
        cy.get("h1").should("exist");
        cy.get("div").should("exist");
        cy.get("p").should("exist");
        cy.get("link").should("exist");
        cy.get("[data-cy=about_input]").should("exist");
        cy.get("[data-cy=about_input]").first().click();
        cy.location('href').should('include', '/contact-us')


    });
});