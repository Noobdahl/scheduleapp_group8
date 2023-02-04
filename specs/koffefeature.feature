Feature: How to use the Scheduleapp

    #Login
    Scenario: Login to the scheduleapp
    Given k That I am on the homepage
    And k That i've entered proper credentials such as "exempel@school.net" and "abc123"
    When k I click login button
    Then k I am now logged in

    #Today
    Scenario: View current date
    Given k That I am logged in
    And k I am on the schedule page
    When k I press the Today button
    Then k Page will scroll up or down until it reaches todays date

    #Logout
    Scenario: Logout from the scheduleapp
    Given k That I am logged in
    And k I am on the schedule page
    When k I click on the logout button
    Then k I am sent to the login page