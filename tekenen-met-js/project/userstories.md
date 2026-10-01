# User Stories – p5.js Project

## Inleiding

In dit document houd ik mijn user stories, schetsen en andere onderdelen van mijn p5.js-project bij.

## User Stories – Programming 101

De user stories zijn geordend op basis van de onderdelen van mijn game. Elke user story beschrijft één duidelijk onderdeel van de game en is klein genoeg om binnen een paar uur te kunnen bouwen en testen.

### Prioriteiten

* **Must have** → noodzakelijk voor een werkende game.
* **Should have** → belangrijk voor de speelbaarheid en duidelijkheid van de game.
* **Could have** → extra functionaliteit die wordt toegevoegd als er voldoende tijd is.

---

## 1. Canvas aanmaken

**Prioriteit:** Must have

### User story

> Als speler wil ik een canvas van 640 × 480 pixels met een achtergrondkleur zien, zodat ik de speelomgeving van de game kan zien.

### Acceptatiecriteria

* [ ] Het canvas heeft een breedte van 640 pixels en een hoogte van 480 pixels.
* [ ] Het canvas heeft een zichtbare achtergrondkleur.

---

## 2. Startmenu maken

**Prioriteit:** Should have

### User story

> Als speler wil ik een startmenu zien met een startknop, zodat ik het spel kan starten wanneer ik klaar ben om te spelen.

### Acceptatiecriteria

* [ ] Bij het openen van de game wordt het startmenu weergegeven.
* [ ] De speler kan door op de startknop te klikken het spel starten.

---

## 3. Vallende ballen

**Prioriteit:** Must have

### User story

> Als speler wil ik dat er ballen vanaf de bovenkant van het canvas naar beneden vallen, zodat er een uitdaging ontstaat tijdens het spelen.

### Acceptatiecriteria

* [ ] De ballen verschijnen aan de bovenkant van het canvas.
* [ ] De ballen bewegen automatisch naar beneden.

---

## 4. Verschillende ballen

**Prioriteit:** Should have

### User story

> Als speler wil ik dat de vallende ballen verschillende groottes en kleuren hebben, zodat de ballen van elkaar verschillen.

### Acceptatiecriteria

* [ ] De ballen hebben verschillende groottes.
* [ ] De ballen hebben verschillende kleuren.

---

## 5. Speler besturen

**Prioriteit:** Must have

### User story

> Als speler wil ik mijn speler met mijn muis kunnen bewegen, zodat ik de vallende ballen kan ontwijken.

### Acceptatiecriteria

* [ ] De speler kan de positie van de speler met de muis veranderen.
* [ ] De speler kan niet buiten het canvas bewegen.

---

## 6. Game over bij botsing

**Prioriteit:** Must have

### User story

> Als speler wil ik dat het spel stopt wanneer mijn speler een bal raakt, zodat duidelijk is dat ik het spel heb verloren.

### Acceptatiecriteria

* [ ] Een botsing tussen de speler en een bal wordt gedetecteerd.
* [ ] Het spel stopt zodra er een botsing plaatsvindt.

---

## 7. Game opnieuw starten

**Prioriteit:** Should have

### User story

> Als speler wil ik na een game over het spel opnieuw kunnen starten, zodat ik opnieuw kan proberen mijn score te verbeteren.

### Acceptatiecriteria

* [ ] Na een game over is er een mogelijkheid om het spel opnieuw te starten.
* [ ] Bij het opnieuw starten begint een nieuwe gamesessie.

---

## 8. Score bijhouden

**Prioriteit:** Should have

### User story

> Als speler wil ik tijdens het spelen mijn overlevingstijd als score kunnen zien, zodat ik weet hoe lang ik in het spel heb overleefd.

### Acceptatiecriteria

* [ ] De score wordt tijdens het spelen weergegeven.
* [ ] De score loopt op zolang de speler in leven is.

---

## 9. Hoogste score bewaren

**Prioriteit:** Could have

### User story

> Als speler wil ik na een game over mijn hoogste score kunnen zien, zodat ik mijn huidige score met mijn beste score kan vergelijken.

### Acceptatiecriteria

* [ ] De behaalde score wordt na een game over vergeleken met de huidige hoogste score.
* [ ] Als de behaalde score hoger is, wordt deze de nieuwe hoogste score.

---

## 10. Speluitleg tonen

**Prioriteit:** Should have

### User story

> Als speler wil ik naast het canvas een informatiebord met de spelregels kunnen zien, zodat ik weet hoe het spel werkt.

### Acceptatiecriteria

* [ ] Naast het canvas wordt een informatiebord weergegeven.
* [ ] Het informatiebord bevat een korte uitleg van de spelregels en besturing.

---

## 11. Moeilijkheid aanpassen

**Prioriteit:** Could have

### User story

> Als speler wil ik de moeilijkheid van het spel kunnen aanpassen, zodat ik het spel makkelijker of moeilijker kan maken.

### Acceptatiecriteria

* [ ] De speler kan een moeilijkheidsniveau kiezen of aanpassen.
* [ ] Het gekozen niveau heeft invloed op de moeilijkheid van het spel, bijvoorbeeld op de snelheid van de vallende ballen.

## 12. Game wordt moeilijker tijdens het spelen

**Prioriteit:** Should have

### User story

> Als speler wil ik dat de game steeds moeilijker wordt wanneer ik meer punten behaal, zodat de uitdaging tijdens het spelen blijft toenemen.

### Acceptatiecriteria

* [ ] De moeilijkheid van de game neemt toe wanneer de score een bepaalde hoeveelheid punten bereikt.
* [ ] De moeilijkheidstoename heeft zichtbaar effect op de gameplay, bijvoorbeeld doordat de ballen sneller gaan vallen.


---

# Prioritering en bouwvolgorde

De user stories zijn hieronder in dezelfde volgorde weergegeven als hierboven. De prioriteit geeft aan hoe belangrijk de user story is voor het uiteindelijke resultaat.

|  # | User story             | Prioriteit  | Waarom?                                                                                    |
| -: | ---------------------- | ----------- | ------------------------------------------------------------------------------------------ |
|  1 | Canvas aanmaken        | Must have   | Dit vormt de basis van de game-omgeving.                                                   |
|  2 | Startmenu maken        | Should have | Hiermee krijgt de game een duidelijke start.                                               |
|  3 | Vallende ballen        | Must have   | Dit vormt een belangrijk onderdeel van de gameplay en zorgt voor een uitdaging.            |
|  4 | Verschillende ballen   | Should have | Dit zorgt voor meer variatie in de obstakels.                                              |
|  5 | Speler besturen        | Must have   | De speler moet de speler kunnen besturen om de ballen te ontwijken.                        |
|  6 | Game over bij botsing  | Must have   | Dit zorgt ervoor dat de game eindigt wanneer de speler wordt geraakt.                      |
|  7 | Game opnieuw starten   | Should have | Hiermee kan de speler na een game over opnieuw spelen.                                     |
|  8 | Score bijhouden        | Should have | Hiermee kan de speler zien hoe lang hij of zij heeft overleefd.                            |
|  9 | Hoogste score bewaren  | Could have  | Dit geeft de speler een extra doel om de score te verbeteren.                              |
| 10 | Speluitleg tonen       | Should have | Hiermee weet de speler hoe de game werkt en bestuurd wordt.                                |
| 11 | Moeilijkheid aanpassen | Could have  | Dit voegt extra functionaliteit toe en geeft de speler meer controle over de moeilijkheid. |

## Minimale werkende versie

De **Must have**-stories vormen samen de minimale werkende versie van de game:

* Canvas aanmaken
* Vallende ballen
* Speler besturen
* Game over bij botsing

---

# Schetsen

Hier komen de schetsen van het p5.js-project te staan.

<!-- Voeg hier de gemaakte schetsen toe. -->

---

# Wat later nog is toegevoegd

Tijdens het ontwikkelen van de game kunnen nieuwe ideeën, functies of verbeteringen ontstaan. Deze worden hieronder bijgehouden.

### Toegevoegde functionaliteiten

*

### Aangepaste user stories

*

### Reden voor de aanpassing

*

### Datum

*

---

# Peer feedback

De user stories worden door een medestudent gecontroleerd aan de hand van de checklist uit de opdracht.

### Checklist

* [ ] Er zijn minimaal 10 user stories.
* [ ] Alle user stories zijn geschreven in het format **"Als … wil ik … zodat …"**.
* [ ] Elke user story is klein genoeg om in een paar uur te bouwen en te testen.
* [ ] Elke user story heeft minimaal 2 acceptatiecriteria.
* [ ] De user stories zijn onafhankelijk genoeg om afzonderlijk te kunnen worden gebouwd en getest.
* [ ] De user stories staan in een logische volgorde.
* [ ] Elke user story komt terug in de gemaakte schets.
* [ ] Geen enkele user story beschrijft meerdere dingen tegelijk.

**Naam medestudent:**

**Datum:**

**Opmerkingen/feedback:**

**Screenshot van de ingevulde checklist:**