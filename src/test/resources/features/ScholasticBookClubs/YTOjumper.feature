@project
Feature: YTO jumper

  Scenario Outline: Verify YTO jumper shows up only once per session
    Given I am on the Homepage
    When I Login with <userEmail> and <password>
    And I go to YTO page
    And I go to By Flyer tab
    And I click on Price-Qty box
    Then I verify jumper with text is displayed
    When I click on Price-Qty box
    Then I verify jumper is NOT displayed

    Examples:
      |userEmail        |password |
      |project@gmail.com|project20|



    Scenario Outline: Verify YTO jumper is not displayed for BonusPoint-Qty
      Given I am on the Homepage
      When I Login with <userEmail> and <password>
      And I go to YTO page
      And I go to By Flyer tab
      And I click on BonusPoint-Qty box
      Then I verify jumper is NOT displayed
      And I click on Price-Qty box
      Then I verify jumper with text is displayed

      Examples:
        |userEmail         |password |
        |project@gmail.com |project20|


      Scenario Outline: Verify user is successfully able to update name in My Accounts
        Given I am on the Homepage
        When I Login with <userEmail> and <password>
        And I go to My Accounts page
        And I update the lastName
        Then I verify name is updated successfully in My Accounts
        And I verify name is updated successfully in Page Header

        Examples:
          |userEmail         |password |
          |project@gmail.com |project20|


      Scenario Outline: Verify user is successfully able to add credit card in My Accounts
        Given I am on the Homepage
        When I Login with <userEmail> and <password>
        And I go to My Accounts page
        And I add credit card
        Then I verify credit card is added successfully in My Accounts
        And I verify added card is displayed when shopping using credit card

        Examples:
          |userEmail         |password |
          |project@gmail.com |project20|

      Scenario Outline: Verify user can successfully add items to My Recommended list
        Given I am on the Homepage
        When I Login with <userEmail> and <password>
        And I search 'Harry' using search box
        And I click on 'star' icon
        Then I verify item is added to recommended list

        Examples:
          |userEmail         |password |
          |project@gmail.com |project20|

