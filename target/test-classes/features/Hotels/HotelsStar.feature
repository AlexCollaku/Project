@test
Feature: Hotels Star

#  Scenario Outline: Verify hotel shows up as star rating selected by user
#    Given I am on landing page
#    When I enter 'vegas' in search
#    And I select 'Las Vegas, Nevada, United States of America' from autosuggestion
#    And I click on Search button
#    And I click on <star> star
#    Then I verify hotels are <star> star rating
#    Examples:
#      | star |
#      | 5    |
#      | 4    |
#      | 3    |
#      | 2    |
#      | 1    |

  @test
  Scenario Outline: Verify hotel shows up as star rating selected by user
    Given I am on default locations search result screen
    When I click on <star> star
    And I verify hotels are <star> star rating
    Examples:
      | star |
      | 5    |
      | 4    |
      | 3    |
      | 2    |
      | 1    |