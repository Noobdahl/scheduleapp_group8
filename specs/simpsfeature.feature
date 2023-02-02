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
And s have filled out "Example invoice" and 5000 and "3000"
Then s i press save
    
    
    
Scenario: Delete newly created invoice
Given s that im logged in with "exempel@school.net" and "abc123"
And s that im in the admin page
And s im in the invoice items tab
And s that im in page 2
And s that id "12" is marked
Then s delete this element

    
