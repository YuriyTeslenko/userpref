var express = require('express');
var app = express();
var orm = require('orm');
var bodyParser = require('body-parser');

var database = require('./config/database');
var preferences = require('./app/controllers/preferences');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 80;

app.use(orm.express(database, {
    define: function (db, models, next) {
        db.load("./app/models/userpref", function (err) {
        models.userpref = db.models.user_pref;
    });
        next();
    }
}));

// ROUTES FOR API

var router = express.Router();

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

router.route('/userpref')
    .get(preferences.list)
    .post(preferences.create);

router.route('/userpref/:user_id')
    .put(preferences.update)
    .get(preferences.get);

app.use('/', router);

// START THE SERVER

app.listen(port);
console.log('Listening on port ' + port);