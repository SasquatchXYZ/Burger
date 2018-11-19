// Import Express & Router
const express = require('express');
const router = express.Router();

// Import the Model (burger.js) to use it's database functions.
const burger = require('../models/burger');

// Create all the routes and the logic for those routes.
router.get('/', function (req, res) {
    burger.selectAll(function(data) {
        const hbsObject = {
            burgers: data
        };
        console.log(JSON.stringify(hbsObject, 2, null));
        res.render('index', hbsObject);
    });
});

router.post('/api/burgers', function(req, res){
    burger.insertOne(['burger_name'], [req.body.burger_name], function(result) {
        res.json({id: result.insertId});
    });
});

router.put('/api/burgers/:id', function(req, res) {
    const name = `id = ${req.params.id}`;
    console.log('name', name);

    burger.updateOne({
        devoured: req.body.devoured
    }, name, function(result) {
        if (result.changedRows === 0) {
            return res.status(404).end()
        } else {
            res.status(200).end()
        }
    });
});

// Export routes for server.js to use.
module.exports = router;