describe('mijn eerste test', ()=> {
    it('doet niet veel' , () =>{
        expect(true).to.equal(true);
    });

    it('draait de applicatie', () =>{
        cy.visit('http://localhost:3000/sign-in/');
        cy.get("[data-cy=emailSignin_input]").type("test@gmail.com");
        cy.get("[data-cy=pwSignin_input]").type("password");
        cy.get("[data-cy=signin_button]").click();

    });
});