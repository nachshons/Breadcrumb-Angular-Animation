Feature: Breadcrumb
  Scenario: Homepage
    Given I am on the home page
    Then the title should contain "Current card is 9"
    And card number 3 should be 3
    And number of cards should be 9

  Scenario: Last Breadcrumb
      Given I am on the home page
      When I click on card number 3
      And I click on card number 2
      And I click on card number 1
      Then the last breadcrumb should be "Card 1"

  Scenario: Last Breadcrumb is the third card
    Given I am on the home page
    When I click on card number 1, 100 times
    And I click Add
    And I click on card number 2
    And I click on card number 1
    And I click Add
    And I click Add
    And I click on card number 3

    Then the last breadcrumb should be "Card 3"
