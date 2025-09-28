@parabank @accounts
Feature: ParaBank Accounts Management

  Background:
    Given I navigate to ParaBank application
    And I login with valid credentials

  @smoke @accounts @parabank
  Scenario: Get all accounts and total amount
    When I click on Accounts Overview
    Then I should get all account balances
    And I should calculate total amount
    And I should log the results