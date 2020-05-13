# Recherche de code postaux ou de ville

Le fichier utile pour votre projet est zipcity.js

## Prérequis :
Utiliser jquery et underscore. Les deux framework sont présent dans le projet.

## Recherche de ville par rapport à un code postal
### Code HTML :
```
<input type="text" name="zipcode">
<div id="cities"></div>
Ville selectionné : <span id="city-name"></span>
```
### Code JQuery
```
$('[name="zipcode"]').off('keydown').on('keydown', _.debounce(function(e) {
    // e.preventDefault();
    zipcity.getFrCity($(e.target).val(), $('#cities'), $('#city-name'));
  }, 300));
 ```
## Recherche de code postal par rapport au nom d'une ville
```
$('[name="zipcode"]').off('keydown').on('keydown', _.debounce(function(e) {
    // e.preventDefault();
    zipcity.getFrZipCode($(e.target).val(), $('#cities'), $('#city-name'));
  }, 300));
```
