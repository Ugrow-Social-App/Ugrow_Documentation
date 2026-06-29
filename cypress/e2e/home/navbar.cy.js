// Verify navbar, if navbar is active or not
describe("Navbar", () => {

    beforeEach(() => {
        cy.visit("/");
    });

    it("navbar should starts to be none", () => {

        cy.get('[data-cy="navbar"]')
            .should("not.be.visible")
    });

    it("navbar should be visible", () => {
        cy.get('[data-cy="burguer_menu"')
            .click();
        
        cy.get('[data-cy="navbar"]')
            .should("be.visible");
    })

    it("navabar should be none, then of click again", () => {
        cy.get('[data-cy="burguer_menu"')
            .click();
        
        cy.get('[data-cy="navbar"]')
            .should("be.visible");
            
        cy.get('[data-cy="burguer_menu"')
            .click();
        
        cy.get('[data-cy="navbar"]')
            .should("not.be.visible");
    })
});