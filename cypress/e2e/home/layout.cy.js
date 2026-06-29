// Test e2e to home layout, verify if the elements exists and if them are visibles
describe("Homepage Layout", () => {

    beforeEach(() => {
        cy.visit("/");
    });

    it("should load the homepage", () => {
        cy.title().should("not.be.empty");
    });

    it("should display the header", () => {
        cy.get('[data-cy="header"]')
            .should("exist")
            .should("be.visible");
    });

    // Starts as none
    it("should display the navigation", () => {
        cy.get('[data-cy="navbar"]')
            .should("exist")
            .should("not.be.visible");
    });

    it("should display the hero section", () => {
        cy.get('[data-cy="main-content"]')
            .should("exist")
            .should("be.visible");
    });

    it("should display the footer", () => {
        cy.get('[data-cy="footer"]')
            .should("exist")
            .should("be.visible");
    });

});