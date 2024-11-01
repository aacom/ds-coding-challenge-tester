import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

Given("I load the app", () => {
    cy.visit("http://localhost:3000");
});

Then("James Morlings revenue is £366.00", () => {
    cy.get("table").find("tr").eq(2).find("td").eq(3).should("contain", "£366.00");
});