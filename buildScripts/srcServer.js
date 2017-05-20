import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

const PORT = 3000;
let app = express();
let compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

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
