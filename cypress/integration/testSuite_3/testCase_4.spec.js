describe("Example Test Suite 3", () => {
    it("Test E", () => {
      cy.visit("https://www.google.com");
      cy.contains("J'accepte").click();
      cy.get('[name="q"]').type("EVOLUCARE Technologies {enter}");
    });
  })
  