Feature: Scheduleapp

    Scenario: Logga in
    Given g att jag är inloggad med "exempel@school.net" and "abc123"
    Then g så ser jag schemat

    Scenario: Komma till dagens datum
    Given g att jag är inloggad med "exempel@school.net" and "abc123"
    And g klickar på till idag
    Then g så kommer jag till dagens datum

    Scenario: Komma till inställningar
    Given g att jag är inloggad med "exempel@school.net" and "abc123"
    And g klickar på admin knappen
    Then g kommer till admin sida

    Scenario: Lägg till något i Schools
    Given g att jag är inloggad med "exempel@school.net" and "abc123"
    And g klickar på admin
    And g är på admin sida
    When g klickar på schools fliken
    And g klickar på create knappen
    And g skriver in en "KunskapsGymnasiet Globen"
    And g skriver in "KGGE" för skolan
    And g klickar på save
    Then g kommer till schools fliken

    # Scenario: Nästa sida
    # Given g att jag är inloggad med "exempel@school.net" and "abc123"
    # When g jag klickar på admin
    # Then g så är jag på admin sida
    # Then g klickar på teachers
    

    