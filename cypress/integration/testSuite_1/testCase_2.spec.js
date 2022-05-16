describe("Example Test Suite 1_2", () => {
  
    it("Test x", () => {
        cy.visit("https://www.google.com");
        cy.contains("J'accepte").click();
        cy.get('[name="q"]').type("EVOLUCARE Technologies {enter}");
      });
    
      it("Test y", () => {
        cy.visit("https://www.google.com");
        cy.contains("J'accepte").click();
        cy.get('[name="q"]').type("EVOLUCARE Technologies {enter}");
        cy.screenshot();
      });

  })
  
