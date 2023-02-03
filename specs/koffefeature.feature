Feature: How to use the Scheduleapp

    #Login
    Scenario: Login to the scheduleapp
    Given k That i've entered proper credentials such as "exempel@school.net" and "abc123"
    And k I am not logged in
    Then k I can now see the schedule and classes

    #Today
    Scenario: View current date
    Given k That I am logged in
    And k I am on the schedule page
    And k The current date is not visible on the screen
    When k I press the Today button
    Then k Page will scroll up or down until it reaches todays date

    #Logout
    Scenario: Logout from the scheduleapp
    Given k That I am logged in
    And k I am on the schedule page
    When k I click on the logout button
    Then k I am sent to the login page and logged out