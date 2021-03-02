// type definitions for Cypress object "cy"
/// <reference types="cypress" />

// type definitions for custom commands like "createDefaultTodos"
/// <reference types="../support" />

const config = Cypress.config()

describe("Basic tests on Applifting website to pass mentorship check", () => {
  beforeEach(() => {
    cy.visit(config.baseUrl).url().should("equal", config.baseUrl)
  })
  
  it("cookie is displayed", () => {
    cy.get("div[id='hs-eu-cookie-confirmation-inner']").should('exist').and("be.visible")
  })
})
