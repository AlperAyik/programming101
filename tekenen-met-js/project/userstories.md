# User Stories – p5.js project

## Inleiding

In dit Word-document houd ik mijn user stories, schetsen en andere onderdelen bij binnen mijn p5.js-project. De user stories beschrijven welke functionaliteiten ik in mijn game wil maken en wat de speler met deze functionaliteiten moet kunnen doen.

Tijdens het ontwikkelen kunnen er nieuwe ideeën ontstaan of bestaande ideeën worden aangepast. Daarom houd ik ook bij welke onderdelen later zijn toegevoegd of veranderd.

---

# Prioriteiten

Ik gebruik drie prioriteiten voor mijn user stories:

* **Must have** – noodzakelijk voor de minimale werkende versie van de game.
* **Should have** – belangrijk voor een betere speelervaring, maar de game kan zonder deze functionaliteit nog steeds werken.
* **Could have** – extra functionaliteiten die ik kan toevoegen als daar tijd voor is.

---

# User Stories

## 1. Canvas en achtergrond

**Prioriteit:** Must have

**Als speler wil ik een canvas van 640x480 pixels met een achtergrondkleur, zodat ik een duidelijk speelveld heb.**

### Acceptatiecriteria

* [x] Het canvas is 640x480 pixels.
* [x] Het canvas heeft een achtergrond.
* [x] De game wordt binnen het canvas weergegeven.

---

## 2. Startmenu

**Prioriteit:** Should have

**Als speler wil ik een startmenu zien voordat het spel begint, zodat ik weet hoe ik de game kan starten.**

### Acceptatiecriteria

* [x] Er wordt een startmenu weergegeven.
* [x] Er is een duidelijke knop of tekst om de game te starten.
* [x] De game begint pas nadat de speler op starten klikt.

---

## 3. Vallende ballen

**Prioriteit:** Must have

**Als speler wil ik dat er ballen vanaf de bovenkant van het scherm naar beneden vallen, zodat ik obstakels heb die ik moet ontwijken.**

### Acceptatiecriteria

* [x] Ballen verschijnen bovenaan het canvas.
* [x] De ballen bewegen naar beneden.
* [x] Wanneer een bal onder het scherm komt, kan deze opnieuw bovenaan verschijnen.
* [x] Er zijn meerdere ballen tegelijkertijd aanwezig.

---

## 4. Verschillende balgroottes en kleuren

**Prioriteit:** Should have

**Als speler wil ik ballen met verschillende groottes en kleuren zien, zodat de game gevarieerder en duidelijker wordt.**

### Acceptatiecriteria

* [x] Niet iedere bal heeft dezelfde grootte.
* [x] Ballen kunnen verschillende kleuren hebben.
* [x] De grootte en kleur worden zichtbaar weergegeven.

---

## 5. Speler besturen

**Prioriteit:** Must have

**Als speler wil ik mijn speler met mijn muis kunnen besturen, zodat ik de vallende ballen kan ontwijken.**

### Acceptatiecriteria

* [x] De speler beweegt horizontaal mee met de muis.
* [x] De speler kan niet buiten het canvas bewegen.
* [x] De speler blijft onderaan het speelveld.

---

## 6. Levens en botsingen

**Prioriteit:** Must have

**Als speler wil ik meerdere levens hebben en een leven verliezen wanneer ik door een bal wordt geraakt, zodat ik meerdere kansen heb om mijn score te verbeteren.**

### Acceptatiecriteria

* [x] De speler begint met een vast aantal levens.
* [x] Wanneer de speler een bal raakt, wordt er één leven afgetrokken.
* [x] De resterende levens worden weergegeven.
* [x] Wanneer alle levens op zijn, eindigt de game.
* [x] De speler kan tijdens één botsing niet meerdere levens tegelijk verliezen.

---

## 7. Game opnieuw starten

**Prioriteit:** Should have

**Als speler wil ik de game opnieuw kunnen starten nadat ik game over ben gegaan, zodat ik opnieuw kan proberen mijn score te verbeteren.**

### Acceptatiecriteria

* [x] Er wordt een game-over scherm weergegeven wanneer alle levens op zijn.
* [x] De speler kan de game opnieuw starten.
* [x] De score en levens worden opnieuw ingesteld.
* [x] De vallende ballen worden opnieuw gestart.

---

## 8. Score bijhouden

**Prioriteit:** Should have

**Als speler wil ik punten krijgen naarmate ik langer overleef, zodat ik mijn voortgang kan bijhouden.**

### Acceptatiecriteria

* [x] De score wordt tijdens het spelen bijgehouden.
* [x] De score wordt zichtbaar weergegeven.
* [x] De score neemt toe zolang de speler in leven blijft.
* [x] De score wordt opnieuw ingesteld wanneer een nieuw spel begint.

---

## 9. Highscore

**Prioriteit:** Could have

**Als speler wil ik mijn hoogste score kunnen zien, zodat ik kan proberen mijn vorige score te verbeteren.**

### Acceptatiecriteria

* [x] De hoogste score wordt bijgehouden.
* [x] De highscore wordt weergegeven wanneer dat relevant is.
* [x] Een nieuwe highscore wordt opgeslagen wanneer de huidige score hoger is dan de vorige.

---

## 10. Uitleg van de game

**Prioriteit:** Should have

**Als speler wil ik uitleg krijgen over hoe de game werkt, zodat ik weet wat ik moet doen.**

### Acceptatiecriteria

* [x] Er wordt uitgelegd hoe de speler wordt bestuurd.
* [x] Er wordt uitgelegd wat de speler moet ontwijken.
* [x] Er wordt uitgelegd hoe de score en levens werken.
* [x] De uitleg is zichtbaar voordat of tijdens het starten van de game.

---

## 11. Moeilijkheid handmatig aanpassen

**Prioriteit:** Could have

**Als speler wil ik de moeilijkheid van de game kunnen aanpassen, zodat ik zelf kan bepalen hoe uitdagend het spel is.**

### Acceptatiecriteria

* [x] De speler kan een moeilijkheidsniveau kiezen.
* [x] De gekozen moeilijkheid heeft invloed op de game.
* [x] Bij een hogere moeilijkheidsgraad is de game uitdagender.

---

## 12. Moeilijkheid verhogen tijdens het spelen

**Prioriteit:** Should have

**Als speler wil ik dat de game steeds moeilijker wordt wanneer ik meer punten behaal, zodat de uitdaging tijdens het spelen blijft toenemen.**

### Acceptatiecriteria

* [x] De moeilijkheid verandert wanneer de speler een bepaald aantal punten behaalt.
* [x] De ballen gaan sneller bewegen.
* [x] De moeilijkheid wordt stapsgewijs verhoogd.
* [x] De speler merkt tijdens het spelen dat de game moeilijker wordt.

---

## 13. Power-up

**Prioriteit:** Could have

**Als speler wil ik tijdens het spelen een power-up kunnen oppakken, zodat ik tijdelijk immuun ben voor botsingen met meteorieten.**

### Acceptatiecriteria

* [ ] Tijdens het spelen kunnen er power-ups verschijnen.
* [ ] De speler kan een power-up oppakken door ermee in aanraking te komen.
* [ ] Na het oppakken wordt de speler voor een bepaalde tijd immuun voor botsingen.
* [ ] Tijdens de immuniteit verliezen botsingen geen levens.
* [ ] Na afloop van de bepaalde tijd vervalt de immuniteit.
* [ ] De power-up verdwijnt nadat deze is opgepakt.

---

## 14. Levelsysteem

**Prioriteit:** Could have

**Als speler wil ik verschillende levels kunnen vrijspelen, zodat ik steeds nieuwe uitdagingen kan krijgen naarmate mijn score hoger wordt.**

### Acceptatiecriteria

* [x] Er zijn meerdere levels beschikbaar.
* [x] Level 1 is vanaf het begin beschikbaar.
* [x] Level 2 kan worden vrijgespeeld wanneer de speler de vereiste highscore behaalt.
* [x] Level 3 kan worden vrijgespeeld wanneer de speler de vereiste highscore behaalt.
* [x] De speler kan tussen vrijgespeelde levels kiezen.
* [x] De highscore van ieder level wordt afzonderlijk bijgehouden.
* [x] De voortgang van de levels wordt opgeslagen, zodat vrijgespeelde levels behouden blijven wanneer de game opnieuw wordt geopend.
* [x] Ieder level kan een eigen achtergrond en moeilijkheid hebben.

---

# Wat later nog is toegevoegd

Tijdens het ontwikkelen van het project zijn er nieuwe ideeën ontstaan en zijn sommige bestaande functionaliteiten aangepast.

## Levens en health power-up

Op **29-09-2026** ontstond het idee om niet direct game over te gaan wanneer de speler een bal raakt. In plaats daarvan krijgt de speler meerdere levens. Hierdoor kan de speler meerdere fouten maken voordat het spel eindigt.

Op **30-09-2026** heb ik dit verder uitgewerkt tijdens het programmeren van de botsingen. De game gebruikt nu een levenssysteem waarbij een botsing één leven kost.

Daarnaast is het idee ontstaan om later een **power-up** toe te voegen waarmee de speler voor een bepaalde tijd geen levens verliest tijdens botsingen.

## Moeilijkheid verhogen

Op **30-09-2026 / 01-10-2026** is het idee verder uitgewerkt om de game moeilijker te maken wanneer de speler meer punten behaalt.

De bedoeling hiervan is dat de game niet gedurende het hele spel dezelfde moeilijkheid houdt. Wanneer de speler langer overleeft en meer punten behaalt, kunnen bijvoorbeeld de ballen sneller gaan bewegen.

Dit is verwerkt in **user story 12**.

## Levelsysteem

Tijdens de verdere ontwikkeling van het project is het idee ontstaan om meerdere levels aan de game toe te voegen. Hierdoor kan de speler niet alleen proberen een hoge score te behalen, maar ook nieuwe levels vrijspelen.

Het levelsysteem bestaat uit drie levels. **Level 1** is vanaf het begin beschikbaar. **Level 2** wordt ontgrendeld wanneer de speler de vereiste highscore behaalt en **Level 3** wordt daarna op basis van een hogere highscore ontgrendeld.

Daarnaast heb ik ervoor gekozen om de voortgang van de levels op te slaan met `localStorage`. Hierdoor blijven de highscores en vrijgespeelde levels bewaard wanneer de game opnieuw wordt geopend.

De levels hebben daarnaast hun eigen achtergrond en kunnen worden gebruikt om de game steeds verder uit te breiden.

Dit is verwerkt in **user story 14**.

---

# Peer feedback

Tijdens het ontwikkelen van mijn project verzamel ik feedback van anderen. Deze feedback gebruik ik om mijn game en user stories te verbeteren.

### Feedback 1

**Datum:**

01-10-2026

**Van:**

Akshay

**Feedback:**

* [x] Feedback ontvangen.
* [x] Feedback verwerkt.

> Om het spel interactief te maken, maak gebruik van backgroundmuziek bij verschillende interacties, zoals death, movement en highscore.

### Feedback 2

**Datum:**

01-10-2026

**Van:**

Akshay

**Feedback:**

* [x] Feedback ontvangen.
* [x] Feedback verwerkt.

> Maak een leuke background animation.

### Feedback 3

**Datum:**

01-10-2026

**Van:**

Akshay

**Feedback:**

* [x] Feedback ontvangen.
* [x] Feedback verwerkt.

> Je hebt nu als speler een circle. Maak er iets leuks van, bijvoorbeeld een spaceship.

### Verwerkte feedback

Na het ontvangen van feedback beschrijf ik hier welke aanpassingen ik daadwerkelijk in mijn project heb gedaan.

Ik heb de ontvangen feedback verwerkt in mijn project. Om het spel interactiever te maken, heb ik backgroundmuziek toegevoegd tijdens het spelen en bij verschillende situaties, zoals game over en de highscore.

Daarnaast heb ik een bewegende space-background toegevoegd. Hierdoor voelt het speelveld meer als een ruimteomgeving en is er tijdens het spelen meer visuele beweging.

Op **01-10-2026** heb ik voor de speler een spaceship gemaakt. Hierdoor past de speler beter bij het thema van de game en voelt het project meer als een space game in plaats van een game met alleen een eenvoudige cirkel als speler.

---

# Schetsen

Hier voeg ik mijn schetsen toe van de verschillende schermen en onderdelen van de game.

## Startmenu

*Hier komt de schets van het startmenu.*

* [x] Schets gemaakt.
* [x] Schets toegevoegd aan het document.

## Gameplay

*Hier komt de schets van het gameplay-scherm.*

* [x] Schets gemaakt.
* [x] Schets toegevoegd aan het document.

## Game over

*Hier komt de schets van het game-over scherm.*

* [x] Schets gemaakt.
* [x] Schets toegevoegd aan het document.