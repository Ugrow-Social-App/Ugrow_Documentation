// Verify if the language is changing
describe("Language Selector", () => {

    beforeEach(() => {
        cy.visit("/");
    });

    it("should change language to English", () => {

        cy.get('[data-cy="language-select"]')
            .select("en");

    });

    it("should change language to Portuguese", () => {

        cy.get('[data-cy="language-select"]')
            .select("pt-br");

    });

    it("should save language in localStorage", () => {

        cy.get('[data-cy="language-select"]')
            .select("en");

        cy.window().then((window) => {
            expect(window.localStorage.getItem("language")).to.equal("en");
        });

    });

});