const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.get('/', (req, res) => {
    console.log(`In /songs GET`);
    const queryText = `SELECT * FROM "artist" ORDER BY "birthdate" DESC;`;
    pool.query(queryText).then((result) => {
        console.log(result);
        res.send(result.rows);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
    console.log(req.body);

    const queryText = `INSERT INTO "artist"("name", "birthdate")
    VALUES($1, $2);`;

    pool.query(queryText, [req.body.name, req.body.birthdate])
    .then((result) => {
        console.log(result);
        res.sendStatus(201);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
});

module.exports = router;