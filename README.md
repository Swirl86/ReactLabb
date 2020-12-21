# ReactLabb: Recruitment-app

- Ni ska Skapa en enkel rekryterings applikation med React.
- Applikationen ska ha en lista med personer som kan se på startsidan och en knapp för att lägga till en ny person.

### Steg för steg:

1. Skapa en ny mapp med namnet "reactlabb" på skrivborder.
2. Öpnna konsolen och ställ den i mappen.
3. Kör kommandot: **npx create-react-app .** för att generera ett nytt projekt.
4. Rensa koden genom att ta bort förutom App.ja och index.js i src mappen (glöm inte att ta bort imports).
5. Skapa en ny komponent med namnet "Emlpoyee".
   - Denna ka ta emot en prop med namnet EmployeesData.
6. Skapa en ny div som retuneras från den komponenten och där kan du presentera informationen hur du vill.
   - använd data som hämtas via EmployeesData prop, t.ex EmployeesData.name, EmployeesData.avatar .. osv.
7. Skapa en ny komponent med namnet "EmployeeList".
   - importera useState funktionen från react.
8. Deklarera ett nytt state med hjälp av useSate med data namnet "employess" och funktionen "setEmployess".

   - Detta statet ska vara en array och ska börja med 3 default personer t.ex:
   - ```JavaScript
      {
      name: "",
      email: "",
      phone: "",
      skills: "",
      avatar: "",
      }
     ```

9. Loopa igenom array:n med hjälp av .map funktionen och visa Emlpoyee komponenten för varje person.
10. Lägg till en ny knapp på EmployeeList komponenten och en onClick funktion med namnet "handleAddEmployee".
11. Deklarera handleAddEmployee funktionen och där ska "setEmployess" blir kallad och en ny person läggs till (hårda koda objektet).

#### Checkpoints

1. Appen ska ha två komponenter:
   - **EmployeeList**: Denna komponenten ska ha ett state där datan om olika personer lagras samt visa en lista med personer på sidan. (Tip: använd map)
   - **Employee**: Denna komponenten ska presentera varje person, den ska ta emot state data via en prop. (Statet ska skickas från **EmployeeList**).
2. Varje person ska ha name, email, phone, skills och avatar (titta på objektet nedan):

   - ```JavaScript

      {
      name: "",
      email: "",
      phone: "",
      skills: "",
      avatar: "",
      }
     ```

3. avatar är en bild, ni kan skriva en direkt länk till bilden. Bilder hittar ni här : https://imgur.com/a/TfuJ77a
4. Statet som finns på **EmployeeList** ska börja med 3 personer som default värde på statet.
5. **EmployeeList** ska han en knapp (Add Employee) som lägger till en ny person på listan, personens information kan ni hårda koda.


### TIPS & Hjälp

- Statet ska vara en array av objekt, [{},{},{}].
- Använd useState(), map().
- Avnänd object/array destruction och spread operator.
- CSS koden hittar ni här: https://pastebin.com/gmpZimYZ
