// requires
var router = require('express').Router();

var catData = {
    cats: []
};

/**
 * @TODO: Write a route that responds to GET /cats by sending the catData object
 * (defined above)
 */
router.get('/', function (req, res) {
    console.log('cats GET route hit');
    res.send(catData); // sending the catData object
});

/**
 * @TODO: Write a route that responds to POST /cats by adding a new cat object
 * to the cats array in the catData object (defined above)
 */
router.post('/', function (req, res) {
    console.log('cats POST route hit: ', req.body);
    catData.cats.push(req.body); // adding a new cat object to the cats array in the catData object
    res.sendStatus(201);
});

// export
module.exports = router;