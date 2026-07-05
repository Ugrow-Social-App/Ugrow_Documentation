// Test to page layout, verify if the elements exists and if them are visibles
describe("Contact Page Layout", () => {

    beforeEach(() => {
        // email.config.js isn't committed to the repo (it holds the EmailJS key),
        // so email.js throws "EMAIL_CONFIG is not defined" when it's missing.
        // That's unrelated to layout, so we ignore just this one error here
        // instead of letting it fail every test in this suite.
        cy.on("uncaught:exception", (err) => {
            if (err.message.includes("EMAIL_CONFIG is not defined")) {
                return false;
            }
        });

        cy.visit("/contact.html");
    });

    it("should load the contact page", () => {
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
        cy.get('[data-cy="contact_main-content"]')
            .should("exist")
            .should("be.visible");
    });

    it("should display the footer", () => {
        cy.get('[data-cy="footer"]')
            .should("exist")
            .should("be.visible");
    });

});