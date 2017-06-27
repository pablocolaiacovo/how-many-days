var Express = require('express');
var Webtask = require('webtask-tools');
var bodyParser = require('body-parser')
var app = Express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// yet to be created
app.use(require('./middlewares/db').connectDisconnect);
require('./routes/counters')(app);

module.exports = Webtask.fromExpress(app).auth0();