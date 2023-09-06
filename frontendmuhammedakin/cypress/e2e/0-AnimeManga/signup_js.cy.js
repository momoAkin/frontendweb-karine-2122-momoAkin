describe('mijn eerste test', ()=> {
    it('doet niet veel' , () =>{
        expect(true).to.equal(true);
    });

    it('draait de applicatie', () =>{
        cy.visit('http://localhost:3000/sign-up/');
        cy.get("[data-cy=nameSignup_input]").type("test ");
        cy.get("[data-cy=emailSignup_input]").type("test@gmail.com");
        cy.get("[data-cy=pwSignup_input]").type("password");
        cy.get("[data-cy=pw2Signup_input]").type("password");
        cy.get("[data-cy=signup_button]").click();

    });
});