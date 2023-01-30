Feature: Använda schemaprogrammet

    # Scenario: Logga in
    # Given m att jag är inloggad med "exempel@school.net" and "abc123"
    # Then m bilden borde synas
    
    # Scenario: Följa en länk till en blogg
    # Given m att jag är inloggad med "exempel@school.net" and "abc123"

    # Scenario: Titta på text i kontrollapanelen
    # Given m att jag är inloggad med "exempel@school.net" and "abc123"
    # And m att jag är inloggad
    # And m jag är i kontrollpanelen
    # Then m är jag i kontrollpanelen


    Scenario: Som användare vill jag kunna logga in för att få tillgång till skit
    Given m att jag är på home
    When m jag skriver in "exempel@school.net" i "#email"
    And m jag skriver in "abc123" i "#password"
    And m jag klickar på loginknappen
    Then m är jag inloggad

    Scenario: Som användare vill jag kunna logga ut från applikationen
    Given m att jag är inloggad
    And m jag är på schemasidan
    When m jag klickar på logoutbutton
    Then m är jag på startsidan

    Scenario: Som användare vill jag kunna trycka på och läsa om lektioner
    Given m att jag är inloggad
    And m jag är på schemasidan
    When m jag klickar på en lektion
    Then m ser jag informationen