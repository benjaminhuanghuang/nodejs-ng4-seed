var express = require('express');
var router = express.Router();

// "GET" request
router.get('/', function(req, res, next) {
    //res.send('INDEX PAGE');
    res.render('index.html');
});

module.exports = router;
