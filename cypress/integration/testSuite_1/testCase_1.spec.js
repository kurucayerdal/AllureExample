describe("Example Test Suite 1_1", () => {
    it("Test 1", () => {
      cy.visit("https://www.google.com");
      cy.contains("J'accepte").click();
      cy.get('[name="q"]').type("EVOLUCARE Technologies {enter}");
      cy.screenshot();
    });
  
    it("Test 2", () => { //This test case will be failed because of the title of the page
      cy.visit("https://www.google.com");
      cy.contains("J'accepte").click();
      cy.get('[name="q"]').type("EVOLUCARE Technologies {enter}");
      cy.screenshot();
      cy.title().should('eq', 'My Title');
    });
  });
  