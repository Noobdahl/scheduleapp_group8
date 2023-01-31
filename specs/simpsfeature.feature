Feature: Using the program

Scenario: Log in, Navigate to admin page and access Register new teacher tab
Given s that im logged in with "exempel@school.net" and "abc123"
And s i press the admin button
And s kommer till admin sida
When s klickar på teachers
Then s kommer till teachers instälningar


    
    
    
    
    
    
    
    
    
    
    
    
#test
    
# Scenario: As an administrator I want to see the teachers
    #     Given that I am logged into admin
    #     When I navigate to the teachers page
    #     Then I should be able to see the "1" th teacher's first name as "Ex"