var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.query);
  res.send('[{"height":100,"color":"green"},{"height":50,"color":"yellow"}]' );
});

module.exports = router;
