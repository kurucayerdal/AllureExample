describe("Example Test Suite 2", () => {
    it("Test a", () => {
      cy.visit("https://www.google.com");
      cy.contains("J'accepte").click();
      cy.get('[name="q"]').type("EVOLUCARE Technologies {enter}");
    });
  })
  