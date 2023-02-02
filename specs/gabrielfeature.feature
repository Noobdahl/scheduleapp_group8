Feature: Scheduleapp

    # Logga in
    Scenario: Logga in
    Given g att jag är inloggad med "exempel@school.net" and "abc123"
    Then g så ser jag schemat

    # Komm till dagen datum
    Scenario: Komma till dagens datum
    Given g att jag är inloggad med "exempel@school.net" and "abc123"
    And g klickar på till idag
    Then g så kommer jag till dagens datum

    #Ha denna
    Scenario: Komma till inställningar
    Given g att jag är inloggad med "exempel@school.net" and "abc123"
    And g klickar på admin knappen
    Then g kommer till admin sida

    # Så man kan komma till nästa sida på schools
    Scenario: Nästa sida
    Given g att jag är inloggad med "exempel@school.net" and "abc123"
    And g kommer till admin
    And g klickar på schools fliken
    And g klickar på pilen till nästa sida
    Then g har hamnat på nästa sida
    
    # Markera vald Invoce item
    Scenario: Ta bort ett Invoice Item
    Given g att jag är inloggad med "exempel@school.net" and "abc123"
    And g klickar på Invoice items fliken
    And g markerar sista elementet
    And klickar den valda fliken
    Then undervisning med Net price 3kr ska vara markerad
  