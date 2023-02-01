Feature: Using the program

Scenario: as a user i want to log in, navigate to teacher page and access Register new teacher tab
Given s that im logged in with "exempel@school.net" and "abc123"
And s i am on teachers tab
When s i press create button
Then s i come to register teacher



Scenario: Register new invoice
Given s that im logged in with "exempel@school.net" and "abc123"
And s that im in the admin page
And s im in the invoice items tab
And s that i have clicked create
And s i have filled out "Example invoice" and "5000" and "3000"
# Then s i press save
    
    
    
    
    
    
    
    
    
    
#test
    
# Scenario: As an administrator I want to see the teachers
    #     Given that I am logged into admin
    #     When I navigate to the teachers page
    #     Then I should be able to see the "1" th teacher's first name as "Ex"