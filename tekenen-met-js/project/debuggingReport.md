# Debugging Report

## Inleiding

Tijdens het programmeren kom ik regelmatig foutmeldingen en onverwacht gedrag in mijn code tegen. Het oplossen van deze problemen is een belangrijk onderdeel van het ontwikkelen van software. In dit Debugging Report documenteer ik de bugs en issues die ik tijdens het programmeren en testen ben tegengekomen.

Per probleem beschrijf ik wat er misging, hoe ik de fout heb onderzocht en welke oplossing ik heb toegepast. Hierbij kijk ik onder andere naar foutmeldingen in de console, problemen met de werking van mijn code en fouten die tijdens het testen naar voren kwamen. Ook beschrijf ik, waar van toepassing, welke feedback ik heb ontvangen en hoe ik mijn code of werkwijze hierop heb aangepast.

Met dit verslag laat ik zien dat ik niet alleen fouten kan oplossen, maar ook bewust en systematisch naar de oorzaak van een probleem kan zoeken. Daarnaast geeft het document inzicht in mijn ontwikkeling als programmeur en in de manier waarop ik leer van fouten en feedback.

---

# Report 1

**Datum:** 21-09-2026
**Opdracht:** p5.js – Tekenen met JavaScript – Opdracht Bewegingen
**Onderdeel:** p5.js leeromgeving

### Probleem

Tijdens het uitvoeren van mijn code kreeg ik in de console een foutmelding waarbij `x` als `undefined` werd aangegeven.

### Oorzaak

De oorzaak was dat ik de variabele `x` alleen binnen `setup()` en `draw()` gebruikte, maar deze niet buiten deze functies had aangemaakt. Hierdoor was de variabele niet beschikbaar op de plek waar ik deze nodig had.

### Oplossing

Ik heb de variabele `x` globaal aangemaakt, zodat deze zowel in `setup()` als in `draw()` beschikbaar is. Daarna verdween de foutmelding en werkte de beweging zoals verwacht.

---

# Report 2

**Datum:** 22-09-2026
**Opdracht:** p5.js – Tekenen met JavaScript – Opdracht Bewegingen
**Onderdeel:** p5.js leeromgeving

### Probleem

Ik wilde de snelheid van verschillende cirkels aanpassen, zodat iedere cirkel op een andere snelheid zou bewegen. Eerst gebruikte ik in de `draw()`-loop `x += 5`. Hierdoor kregen alle cirkels dezelfde snelheidsverandering en bewogen ze allemaal op dezelfde manier.

### Oorzaak

De oorzaak was dat ik dezelfde waarde gebruikte voor de beweging van iedere cirkel. Hierdoor had ieder object dezelfde snelheid.

### Oplossing

Ik heb voor iedere cirkel een eigen object aangemaakt. Aan ieder object heb ik vervolgens met `random()` een eigen snelheid meegegeven. Tijdens `draw()` wordt deze opgeslagen snelheid gebruikt om de positie van de cirkel aan te passen.

Hierdoor heeft iedere cirkel een eigen snelheid en kunnen de cirkels onafhankelijk van elkaar bewegen.

---

# Report 3

**Datum:** 22-09-2026
**Opdracht:** p5.js – Tekenen met JavaScript – Opdracht Bewegingen
**Onderdeel:** p5.js leeromgeving

### Probleem

Ik gebruikte `random()` direct in de `draw()`-functie om de cirkels te laten bewegen. Hierdoor begonnen de cirkels te trillen en bewogen ze veel te snel.

### Oorzaak

De `draw()`-functie wordt ongeveer 60 keer per seconde uitgevoerd. Omdat ik iedere keer opnieuw `random()` aanriep, kreeg de cirkel bij iedere uitvoering een nieuwe willekeurige positie of beweging. Hierdoor veranderde de positie steeds opnieuw en ontstond het trillende effect.

### Oplossing

Ik heb de willekeurige snelheid niet meer iedere keer opnieuw berekend in `draw()`. In plaats daarvan geef ik ieder object vooraf een willekeurige snelheid mee. Tijdens `draw()` gebruik ik vervolgens die opgeslagen snelheid om de positie van de cirkel aan te passen.

Hierdoor blijft de snelheid van iedere cirkel hetzelfde en bewegen de cirkels vloeiender en onafhankelijk van elkaar.

---

# Report 4

**Datum:** 21-09-2026
**Opdracht:** p5.js – Tekenen met JavaScript – Falling Balls
**Onderdeel:** p5.js leeromgeving / voorbereiding project

### Probleem

Ik had een falling balls-animatie waarbij meerdere ballen vanaf de bovenkant van de canvas naar beneden vallen. Eerst was mijn idee om iedere keer dat een bal onder de `height` van de canvas kwam een nieuwe bal aan te maken.

### Onderzoek

Tijdens het programmeren heb ik gekeken naar een manier om de bestaande ballen opnieuw te gebruiken in plaats van steeds nieuwe objecten aan te maken. Ik kwam erachter dat ik de positie en eigenschappen van een bestaande bal opnieuw kon instellen zodra deze onder de canvas terechtkomt.

### Oplossing

Ik heb ervoor gekozen om de bestaande ballen te hergebruiken. Wanneer `ball.y` groter wordt dan de onderkant van de canvas, wordt de bal opnieuw bovenaan geplaatst.

Daarnaast krijgt de bal op dat moment een nieuwe grootte en een nieuwe `x`-positie. Hierdoor lijkt het alsof er steeds nieuwe ballen naar beneden vallen, terwijl ik dezelfde objecten blijf gebruiken.

Dit voorkomt dat de `balls`-array steeds groter wordt en maakt de animatie overzichtelijker.

---

# Report 5

**Datum:** 30-09-2026
**Opdracht:** p5.js – Tekenen met JavaScript – Project
**Onderdeel:** Project

### Probleem

Tijdens het testen van mijn project merkte ik dat wanneer mijn speler een bal raakte, meerdere levens tegelijk werden afgetrokken. Eén botsing kon er daardoor voor zorgen dat bijna al mijn levens direct verdwenen.

### Oorzaak

De oorzaak was dat mijn collision-check iedere keer in de `draw()`-functie wordt uitgevoerd. Omdat `draw()` ongeveer 60 keer per seconde wordt uitgevoerd, werd `levens--` ook meerdere keren uitgevoerd zolang de speler de bal raakte.

### Oplossing

Ik heb onderzocht hoe ik ervoor kan zorgen dat één botsing maar één keer wordt geregistreerd. Hierbij heb ik gekeken naar de manier waarop mijn collision-check iedere frame wordt uitgevoerd.

Ik heb hiermee geleerd dat ik bij animaties en games rekening moet houden met het feit dat code in `draw()` meerdere keren per seconde wordt uitgevoerd. Een collision moet daarom niet automatisch betekenen dat dezelfde actie iedere frame opnieuw wordt uitgevoerd.

---

# Report 6

**Datum:** 30-09-2026
**Opdracht:** p5.js – Tekenen met JavaScript – Project
**Onderdeel:** Project

### Probleem

Tijdens het testen van mijn collision detection merkte ik dat mijn speler soms al een bal raakte volgens de code, terwijl er op het scherm nog duidelijk ruimte tussen de speler en de bal zichtbaar was. Hierdoor werden levens afgetrokken en kon ik zelfs game over gaan zonder dat de bal de speler daadwerkelijk leek te raken.

### Onderzoek

Ik heb mijn collision-code gecontroleerd en verschillende waardes getest met `console.log()`. Hierbij heb ik onder andere de `radius` van de bal en de berekende `distance` gecontroleerd.

Tijdens het debuggen kwam ik erachter dat de grootte van de bal die ik in de collision-berekening gebruikte niet overeenkwam met de grootte van de bal die op het scherm werd getekend.

### Oorzaak

De oorzaak was dat ik bij het tekenen van de bal de `radius` gebruikte als waarde voor de grootte van de cirkel, terwijl `circle()` een **diameter** verwacht.

Hierdoor was de bal op het canvas kleiner dan de collision-berekening aannam. De collision detection ging daardoor uit van een grotere bal dan de bal die daadwerkelijk zichtbaar was.

### Oplossing

Ik heb de code gecontroleerd en aangepast zodat de bal met de juiste `diameter` wordt getekend. Hierdoor komen de visuele grootte van de bal en de grootte die voor de collision-berekening wordt gebruikt met elkaar overeen.

Door `console.log()` te gebruiken kon ik de waardes tijdens het uitvoeren van het programma controleren en de oorzaak van het probleem vinden.

# Report 7

**Datum:** 04-10-2026

**Opdracht:** p5.js – Tekenen met JavaScript – Project

**Onderdeel:** Project / levelsysteem

### Probleem

Tijdens het testen van mijn levelsysteem kreeg ik een foutmelding in de console:

`Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'open')`

De foutmelding ontstond tijdens het uitvoeren van `drawBackground()`. Hierdoor kon mijn game niet goed starten.

### Onderzoek

Ik heb eerst gekeken naar de regel die in de foutmelding werd aangegeven. In `drawBackground()` gebruikte ik bijvoorbeeld:

```js
levels.level1.open
```

Daarna heb ik gecontroleerd hoe de variabele `levels` werd aangemaakt. Ik zag dat ik de levels uit `localStorage` haalde met:

```js
let levels = localStorage.getItem('levels') || LEVELS;
```

Ik realiseerde me dat `localStorage` gegevens als een string opslaat. Mijn `levels`-object werd eerder met `JSON.stringify()` opgeslagen, waardoor ik de opgeslagen gegevens bij het ophalen weer moest omzetten naar een JavaScript-object.

### Oorzaak

De oorzaak was dat ik `JSON.parse()` was vergeten bij het ophalen van de levels uit `localStorage`.

De opgeslagen JSON-string werd daardoor niet automatisch teruggezet naar een JavaScript-object. Hierdoor kon ik `levels.level1.open` niet gebruiken en was `levels.level1` `undefined`.

### Oplossing

Ik heb de code aangepast naar:

```js
let levels = JSON.parse(localStorage.getItem('levels')) || LEVELS;
```

Met `JSON.parse()` wordt de opgeslagen JSON-string weer omgezet naar een JavaScript-object. Hierdoor kan ik de properties van `levels`, zoals `levels.level1.open` en `levels.level1.highScore`, weer gebruiken.

Omdat ik tijdens het testen al een verkeerde waarde in `localStorage` had opgeslagen, heb ik deze eerst verwijderd en daarna de pagina opnieuw geladen. Vervolgens werkte het levelsysteem weer zoals verwacht.

### Wat heb ik geleerd?

Ik heb geleerd dat ik bij het werken met `localStorage` rekening moet houden met het verschil tussen een JavaScript-object en een JSON-string. Bij het opslaan gebruik ik `JSON.stringify()` en bij het ophalen gebruik ik `JSON.parse()`.

Hierdoor weet ik nu beter hoe ik objecten met meerdere properties veilig kan opslaan en later weer kan gebruiken.


---

# Coachgesprek

## Feedback

**Datum:** Nog in te vullen

Tijdens het coachgesprek bespreek ik mijn Debugging Report en mijn aanpak bij het oplossen van problemen. Hier noteer ik de feedback die ik tijdens het gesprek krijg en eventuele verbeterpunten die ik daarna in mijn code of werkwijze toepas.

**Feedback:**

* Nog in te vullen.

**Wat heb ik met de feedback gedaan?**

* Nog in te vullen.
