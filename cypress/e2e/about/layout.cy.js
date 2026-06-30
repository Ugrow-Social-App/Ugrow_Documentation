// Test e2e to about page layout, verify if the elements exists and if them are visibles
describe("Homepage Layout", () => {

    beforeEach(() => {
        cy.visit("/about.html");
    });

    it("should load the about page", () => {
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

    it("should display the about main content", () => {
        cy.get('[data-cy="about_main-content"]')
            .should("exist")
            .should("be.visible");
    });

    it("should display the footer", () => {
        cy.get('[data-cy="footer"]')
            .should("exist")
            .should("be.visible");
    });

});