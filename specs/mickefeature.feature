Feature: Se schema

    Scenario: Logga in
    Given att jag är inloggad med "exempel@school.net" and "abc123"
    Then bilden borde synas
    

    Scenario: Titta på text i kontrollapanelen
    Given att jag är inloggad
    And jag är i kontrollpanelen
    Then är jag i kontrollpanelen