import express from 'express';
import passportAuth from '../authentication/passportAuth'

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("herere")
  res.render('index', { title: 'Veniqa Shopping Server' });
});

module.exports = router;
