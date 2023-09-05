var express = require('express');
var router = express.Router();
const TemperamentService = require('../services/TemperamentService');
const db = require('../models');

const temperamentService = new TemperamentService(db);

router.get('/', async function (req, res, next) {
  temperament = await temperamentService.getTemperaments();
  if (!req.user) res.render('temperament', { user: null, temperament: temperament });
  else res.render('temperament', { user: req.user, temperament: temperament });
});

router.post('/update', async function (req, res, next) {
  res.render('index', { user: null });
});

module.exports = router;
