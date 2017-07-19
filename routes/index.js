var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Test EJS', option: 'Option', quantity: 'Quantity' });

});


module.exports = router;
