const express = require('express');
const bodyParser = require('body-parser');
const pool = require('./modules/pool.js');

const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

app.listen(PORT, () => {
    console.log('listening on port', PORT)
});

let artistRouter = require('./routes/artist_router.js');
app.use('/artist', artistRouter);

let songRouter = require('./routes/song_router.js');
app.use('/song', songRouter);


