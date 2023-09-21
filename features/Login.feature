Feature: Login to the facegenie application
  Scenario Outline: login with valid credentials
    Given I navigate to facegenie website
    When I enter gmail as testbams@gmail.com and password as facegenie  into the fields
    And I click on the Login button
    Then User should login based on expected "<Loginstatus>" status
    Examples: 
      | email               | Password  | status  |
      | testbams@gmail.com  | facegenie | success |
      | TestBams@gmail.com  | Facegenie | Fail    |
