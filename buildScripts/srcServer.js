import express from 'express';
import path from 'path';
import open from 'open';

const PORT = 3000;
let app = express();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(PORT, function(err) {
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + PORT);
    }
});
