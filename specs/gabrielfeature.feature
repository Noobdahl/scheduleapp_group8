Feature: Scheduleapp

    Scenario: Logga in
    Given att jag är inloggad med "exempel@school.net" and "abc123"
    Then så ser jag schemat

    Scenario: Komma till dagens datum
    Given att jag är inloggad med "exempel@school.net" and "abc123"
    And klickar på till idag
    Then så kommer jag till dagens datum

    Scenario: Komma till inställningar
    Given att jag är inloggad med "exempel@school.net" and "abc123"
    And klickar på admin knappen
    Then kommer till admin sida


    Scenario: Nästa sida
    Given att jag är inloggad med "exempel@school.net" and "abc123"
    When jag klickar på admin
    Then så är jag på admin sida
    Then klickar på teachers
    

