// Verify theme, if theme switch right
describe("Theme Selector", () => {

    beforeEach(() => {
        cy.visit("/");
    });

    // Verify switch
    it("should change to dark theme", () => {

        cy.get('[data-cy="theme-toggle"]')
            .select("dark");

        cy.get("body")
            .should("have.class", "dark").and("not.have.class", "light").and("not.have.class", "system");

    });

    it("should change to light theme", () => {

        cy.get('[data-cy="theme-toggle"]')
            .select("light");

        cy.get("body")
            .should("have.class", "light").and("not.have.class", "dark").and("not.have.class", "system");

    });
    
    it("should change to system theme", () => {

        cy.get('[data-cy="theme-toggle"]')
            .select("system");

        cy.get("body")
            .should("have.class", "system").and("not.have.class", "dark").and("not.have.class", "light");

    });

    it("should save dark theme in localStorage", () => {

        cy.get('[data-cy="theme-toggle"]')
            .select("dark");

        cy.window().then((window) => {
            expect(window.localStorage.getItem("theme")).to.equal("dark");
        });

    });

    it("should keep dark theme after reload", () => {

        cy.get('[data-cy="theme-toggle"]')
            .select("dark");

        cy.reload();

        cy.get("body")
            .should("have.class", "dark").and("not.have.class", "light").and("not.have.class", "system");

    });

});