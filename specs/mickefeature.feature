Feature: Använda schemaprogrammet

    Scenario: Som användare vill jag kunna logga in
    Given m att jag är på home
    When m jag skriver in "exempel@school.net" i "#email"
    And m jag skriver in "abc123" i "#password"
    And m jag klickar på '[type="submit"]'
    Then m är jag inloggad

    # --------------

    Scenario: Som användare vill jag kunna logga ut från applikationen
    Given m att jag är inloggad
    And m jag är på schemasidan
    When m jag klickar på '[onclick="location.href=\'/logout.html\'"]'
    Then m är jag på startsidan

    # --------------

    Scenario: Som användare vill jag kunna trycka på och läsa om lektioner
    Given m att jag är inloggad
    And m jag är på schemasidan
    When m jag klickar på en lektion
    Then m ser jag informationen

    # --------------

    Scenario: Som admin vill jag kunna gå till administrationsmenyn
    Given m att jag är inloggad
    When m jag klickar på '[onclick="location.href=\'/admin\'"]'
    Then m är jag på admin sidan
    # --------------

    Scenario: Som admin vill jag kunna lägga till en skola
    Given m att jag är inloggad
    And m jag är i schools-tabben
    When m jag klickar på '.MuiToolbar-root > a.MuiButton-root'
    Then m tas jag till sidan register new school

    Given m att fältet "#name" är ifyllt med "Newton YH"
    And m att fältet "#shortName" är ifyllt med "NYH"
    When m jag klickar på '.RaToolbar-defaultToolbar > .MuiButton-root'
    
    # --------------

    Scenario: Som admin vill jag kunna ta bort en skola
    Given m att jag är inloggad
    And m jag är i schools-tabben
    And m jag klickar på skolan
    When m jag klickar på '.MuiButton-text'
    Then m finns inte skolan kvar i listan


    # Scenario: Som admin vill jag kunna lägga till en lärare
    # Given m att jag är inloggad
    # And m jag är i teacher-tabben
    # When m jag klickar på '.MuiToolbar-root > a.MuiButton-root'
    # Then m tas jag till create-teacher-sidan

    # Given m att fältet "#email" är ifyllt med "Micke"
    # And m att fältet "#password" är ifyllt med "pomp"


    