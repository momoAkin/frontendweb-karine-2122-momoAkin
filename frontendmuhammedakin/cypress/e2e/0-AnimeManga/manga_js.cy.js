describe('mijn eerste test', ()=> {
    it('doet niet veel' , () =>{
        expect(true).to.equal(true);
    });

    it('draait de applicatie', () =>{
        cy.visit('http://localhost:3000/manga/');
        cy.get("h1").should("exist");
        cy.get("h3").should("exist");
        cy.get("div").should("exist");
        cy.get("main").should("exist");
        cy.get("form").should("exist");
        cy.get("input").should("exist");
        cy.get("a").should("exist");
        cy.get("img").should("exist");
    });
    it('kan zoeken naar anime', () => {
        cy.visit('http://localhost:3000/');
        cy.get("[data-cy=zoekbalk_input]").should("exist");
        cy.get("[data-cy=zoekbalk_input]").type("naruto");
        cy.get("[data-cy=zoekbalk_input]").submit();
        cy.get("p").should("exist");
        cy.get("figure").should("exist");
        cy.get("img").should("exist");
        cy.get("a").should("exist");
        cy.get("[data-cy=animecard_a]").first().click();
    })

    it('check load',() => {
        cy.visit('http://localhost:3000/manga/');
        cy.get("[data-cy=topAnime_Input]").should("exist");
    })

    it('check top 10',() => {
        cy.visit('http://localhost:3000/manga/');
        cy.get("[data-cy=topAnime_Input]").should("exist");
        cy.get("[data-cy=topAnime_Input]").should("have.length", 10);
        cy.get("[data-cy=topAnime_Input]").first().click();
    })
});