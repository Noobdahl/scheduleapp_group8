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
    And m jag valt vilken skola som ska tas bort
    When m jag klickar på '.MuiButton-text'
    Then m finns inte skolan kvar i listan



            # Scenario: Som admin vill jag kunna lägga till en lärare
            # Given m att jag är inloggad
            # And m jag är i teacher-tabben
            # When m jag klickar på '.MuiToolbar-root > a.MuiButton-root'
            # Then m tas jag till create-teacher-sidan

            # Given m att fältet "#email" är ifyllt med "Micke"
            # And m att fältet "#password" är ifyllt med "pomp"




    #NEW Gränssnitt!

#Feature: Gå till calendar
    Scenario: Som användare vill jag kunna klicka på Calender så att jag kan kolla mitt schema
    Given m att jag är inloggad
    And m jag är på admin sidan
    And m det finns en "#calendar" knapp
    When m jag klickar på '[type="calendar"]'
    Then m jag är på schemasidan

#Feature: Posta på dashboard
    Scenario: Som användare vill jag kunna lägga upp information på dashboard så att folk kan ta del av dessa posts
    Given m att jag är inloggad
    And m jag är på dashboard sidan
    And m det finns en "#newPost" knapp
    When m jag klickar på '#newPost'
    Then m tas jag till 'NewPost' vyn

    Given m jag är på 'NewPost' vyn
    And m det finns ett '#titleField' fält
    And m det finns ett '#informationField' fält
    And m det finns en '#createPost' knapp
    And m det finns en '#cancel' knapp
    When m jag skriver in "Test Title" i "#titleField"
    And m jag skriver in "test inlägg" i "#informationField"
    And m jag klickar på '#createPost'
    Then m får jag pop-up ruta med texten "Post created"


#Feature: Filtrera Calender
    Scenario: Som användare vill jag kunna filtrera calender vyn så att jag kan få fram relevanta information
    Given att jag är inloggad
    And att jag är på schemavyn
    And det finns en "Filter" knapp i mellan "Admin" och "Logout" knappen
    When jag klickar på "Filter" knappen
    Then får jag upp en "Filter" pop-up ruta

    Given att jag är i "Filter" pop-up rutan
    And det finns ett "Class" fält med "rullgardin-meny"
    And det finns ett "Teacher" fält med "rullgardin-meny"
    And det finns en "Apply" knapp
    And det finns en "Cancel" knapp
    When jag klickar på "Rullgardin-menyn" för "Class"
    Then får jag upp en lista med alla "Classes"

    Given att jag är i listan med "Classes"
    And jag har flera klickbara alternativ
    And det finns en "Ok" knapp
    And det finns en "Cancel" knapp
    When jag klickar på mina alternativ jag vill filtrera efter
    And jag klickar på "Ok" knappen
    Then kommer jag tillbaka till "Filter" pop-up rutan
    And "Class" fältet har alternativen jag har valt i sig

    Given att jag är i "Filter" pop-up rutan
    When jag klickar på "Rullgardin-menyn" för "Teacher"
    Then får jag upp en lista med alla "Teacher"

    Given att jag är i listan med "Teacher"
    And jag har flera klickbara alternativ
    And det finns en "Okey" knapp
    And det finns en "Cancel" knapp
    When jag klickar på mina alternativ jag vill filtrera efter
    And jag klickar på "Okey" knappen
    Then kommer jag tillbaka till "Filter" pop-up rutan
    And "Teacher" fältet har alternativen jag har valt i sig

    Given att jag är i "Filter" pop-up rutan
    And "Classes" fältet har alternativen jag har valt i sig
    And "Teacher" fältet har alternativen jag har valt i sig
    When jag klickar på "Apply" knappen
    Then tas jag till schemavyn
    And schemavyn filtreras efter mina invalda alternativ