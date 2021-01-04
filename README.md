# ReactLabb: Recruitment-app

- Ni ska Skapa en enkel rekryterings applikation med React.
- Applikationen ska ha en lista med personer som kan se på startsidan och en knapp för att lägga till en ny person.

### Krav

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
