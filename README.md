# Bunker Brew Cellar

[Link to project](https://bunker-brew-cellar-app.herokuapp.com/)

[Link to project's back end repository](https://github.com/caristopmer/bunker-brew-cellar-api)


This web app is for tracking the beer contents of the fridge in the Bunker office. It features an Angular 5 front end and a back end API written in Rails 5.

## MVP, as of Cinco do Quattro, 2018:
- Sample beers have been seeded into app.
- User can view the name, brewery, brewery location, and current quantity of beer in the fridge.
- User may 'take' a beer from the fridge, reducing it's quantity.
- User may 'restock' the fridge with a specified number of beers, increasing quantity.

## Features to add:
- Massive UI cleanup and improvement
- User can add new beers to the fridge, which will then appear in the list.
- Beers will be grayed out if their quantity falls to 0.
- Add `selections` table to schema as alternative way to track quantity and be able to track beer popularity.
- Beers can be tapped/clicked on to view more information about that beer (ABV, description, photo, etc.)
- Add ability to generate 're-ordering' email with current list of inventory, favorites, etc.
