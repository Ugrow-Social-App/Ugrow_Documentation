// Test to page layout, verify if the elements exists and if them are visibles
describe("Documentation Page Layout", () => {

    beforeEach(() => {
        cy.visit("/documentation.html");
    });

    it("should load the documentation page", () => {
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

    it("should display the page main content", () => {
        cy.get('[data-cy="documentation_main-content"]')
            .should("exist")
            .should("be.visible");
    });

    it("should display the footer", () => {
        cy.get('[data-cy="footer"]')
            .should("exist")
            .should("be.visible");
    });

});