Feature: ParaBank Logout Functionality

  Background:
    Given I navigate to ParaBank application
    And I login with valid credentials

  @smoke @logout @parabank
  Scenario: Successful logout
    When I click logout button
    Then I should be redirected to login page
    And I should see login form
    And session should be terminated

  @logout @security @parabank
  Scenario: Logout and attempt to access protected page
    When I click logout button
    And I try to access accounts overview directly
    Then I should be redirected to login page
    And I should not see account information