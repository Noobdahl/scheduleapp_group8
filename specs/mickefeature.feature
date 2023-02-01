Feature: Använda schemaprogrammet

    # Scenario: Logga in
    # Scenario: 


    # Scenario: Som användare vill jag kunna logga in
    # Given m att jag är på home
    # When m jag skriver in "exempel@school.net" i "#email"
    # And m jag skriver in "abc123" i "#password"
    # And m jag klickar på '[type="submit"]'
    # Then m är jag inloggad

    # Scenario: Som användare vill jag kunna logga ut från applikationen
    # Given m att jag är inloggad
    # And m jag är på schemasidan
    # When m jag klickar på '[onclick="location.href=\'/logout.html\'"]'
    # Then m är jag på startsidan

    # Scenario: Som användare vill jag kunna trycka på och läsa om lektioner
    # Given m att jag är inloggad
    # And m jag är på schemasidan
    # When m jag klickar på en lektion
    # Then m ser jag informationen

    # Scenario: Som admin vill jag kunna gå till administrationsmenyn
    # Given m att jag är inloggad
    # When m jag klickar på '[onclick="location.href=\'/admin\'"]'

    # Scenario: Som admin vill jag kunna lägga till en skola
    # Given m att jag är inloggad
    # And m jag är i schools-tabben
    # When m jag klickar på '.MuiToolbar-root > a.MuiButton-root'

    Scenario: Som admin vill jag kunna lägga till en skola
    Given m att jag är inloggad
    And m jag är i teacher-tabben
    When m jag klickar på '.MuiToolbar-root > a.MuiButton-root'
    And select
    And deselect
    And save


    # Scenario: Som användare vill jag kunna klicka på Calender så att jag kan kolla på mitt schema
    # Given att jag är inloggad
    # And att jag är på adminhuvudsidan
    # And det finns en Calender knapp
    # When jag klickar på Calender knappen
    # Then tas jag till Calendarvyn

    # Scenario: Som användare 
    # Given att jag är inloggad
    # And att jag är på dashboardsidan
    # And det finns en Create Post knapp
    # When jag klickar på Create Post knappen
    # Then tas jag till Create Post vyn

    # Given att jag är i Create Post vyn
    # Och det finns ett


    #TODO fylla på trellon!