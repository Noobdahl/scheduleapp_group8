Feature: Se schema

    Scenario: Logga in
    Given m att jag är inloggad med "exempel@school.net" and "abc123"
    Then m bilden borde synas
    

    Scenario: Titta på text i kontrollapanelen
    Given m att jag är inloggad
    And m jag är i kontrollpanelen
    Then m är jag i kontrollpanelen

    Scenario: Följa en länk till en blogg
    Given m att jag är inloggad