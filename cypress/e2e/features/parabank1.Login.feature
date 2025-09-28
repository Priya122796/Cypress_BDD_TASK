Feature: ParaBank Login Functionality

  Background:
    Given I navigate to ParaBank application

  @smoke @login @parabank
  Scenario: Successful login with valid credentials
    When I enter username "Nifaanya Priya" and password "Nifanaya_Incu"
    And I click the login button
    Then I should see login API is successful
    And I should see welcome message with username "Welcome"
    And I should be redirected to dashboard page

  @negative @login @parabank
  Scenario: Login with invalid credentials
    When I enter username "invalid_user" and password " "
    And I click the login button
    Then I should see login API is successful
    And I should be redirected to dashboard page

  @validation @login @parabank
  Scenario: Login form validation
    When I click the login button without entering credentials
    Then I should see validation errors
    And I should remain on login page