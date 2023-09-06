describe('mijn eerste test', ()=> {
    it('doet niet veel' , () =>{
        expect(true).to.equal(true);
    });

    it('draait de applicatie', () =>{
        cy.visit('http://localhost:3000/contact-us/');
        cy.get("[data-cy=name_input]").type("test cypress");
        cy.get("[data-cy=email_input]").type("test@gmail.com");
        cy.get("[data-cy=message_input]").type("test");
        //cy.get("[data-cy=submit_mesage]").click();
        cy.get("h1").should("exist");
        cy.get("div").should("exist");
        cy.get("main").should("exist");
        cy.get("form").should("exist");
        cy.get("input").should("exist");
        cy.get("a").should("exist");
        cy.get("img").should("exist");
    });

    it('fout ingave', () =>{
        cy.visit('http://localhost:3000/contact-us/');
        cy.get("[data-cy=submit_mesage]").click();
        cy.get("h1").should("exist");
        cy.get("div").should("exist");
        cy.get("main").should("exist");
        cy.get("form").should("exist");
        cy.get("input").should("exist");
        cy.get("a").should("exist");
        cy.get("img").should("exist");
    });
});