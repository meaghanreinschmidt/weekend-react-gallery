const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool.js');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    // console.log(req.params);
    const galleryId = req.params.id;
    const queryText = `UPDATE "galleryList"
                       SET "likes" = "likes" + 1
                       WHERE "id" = $1`;
    pool.query(queryText, [galleryId]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    // console.log('in GET route request');
    const queryText = 'SELECT * FROM "galleryList" ORDER BY "id";';
    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    })
}); // END GET Route

// DELETE Route
router.delete('/:id', (req, res) => {
    console.log('In Delete Request');
    let queryText = 'DELETE FROM "galleryList" WHERE "id" = $1';

    pool.query(queryText, [req.params.id]).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    })
})

module.exports = router;