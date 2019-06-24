Feature: Cypress examples using Gherkin

  I want to test cypress using Gherkin

  Background:
    Given I am on the testing page

  @example
  Scenario: Example 1
    When I enter a name for "John Smith"
    Then "John Smith" will display in the input box