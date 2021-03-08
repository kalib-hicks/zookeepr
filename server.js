const express = require('express');
const { animals } = require('./data/animals');

const PORT = process.env.PORT | | 3001;
// instantiate the server
// assign express() to the app variable so that
// chains can be added later
const app = express();

// filter functionality
function filterByQuery(query, animalsArray) {
    let personalityTraitsArray = [];
    //save the anials array as filtered results here:
    let filteredResults = animalArray;
    if (query.personalityTraits) {
//save personality traits as dedicated array
// if personality traits is a string, place it into a new array and save
    if (typeof query.personalityTraits === 'string') {
        personalityTraitsArray = [query.personalityTraits];
    } else {
        personalityTraitsArray = query.personalityTraits;
    }
// loop through each trait in the personalityTRaits array:
personalityTraitsArray.forEach(trait => {
// check trait against each animal in filteredResults array
// it is initially a copy of the animalsArray,
// here its being updated for each trait in the .forEach() loop
// for each trait in the filter, the filteredREsults
//array will then contain only the entries for the trait
//so at the end an array of animals that have every one
// of the traits when the forEach() loop is done
filteredREsults = filteredResults.filter(
    animal => animal.personalityTraits.indexOf(trait) !== -1
);
});

}
    if (query.diet) {
        filteredResults = filteredResults.filter(animal =>.diet === query.diet);
    }
    if (query.species) {
        filteredResults = filteredResults.filter(animal.species === query.species);
    }
    if (query.name) {
        filteredResults = filteredResults.filter(animal => animal.name === query.name);
    }
    return filteredResults;
}
// add route 
// .get requires two arguments :
// 1: string that describes 
// the route the client will have to fetch from
// 2: a callback function that will execute every time
// that the route is accessed with a GET request
// send() from the res parameter to send 
// the string "Hello! to the client"
app.get('/api/animals', (req, res) => {
    let results = animals;
    if (req.query) {
        resutls = filterByQuery(req.query, results);
    }
    res.json(results);
});

// chain the listen() method onto the server
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });