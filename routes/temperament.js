var express = require('express');
var router = express.Router();
const TemperamentService = require('../services/TemperamentService');
const db = require('../models');
const getUrl = require('../utils/getUrl');
const bodyParse = require('body-parser');
const jsonParser = bodyParse.json();

const temperamentService = new TemperamentService(db);

router.get('/', async function (req, res, next) {
  temperament = await temperamentService.getTemperaments();
  temperament.url = getUrl() + 'temperament';
  if (!req.user) res.render('temperament', { user: null, temperament: temperament });
  else res.render('temperament', { user: req.user, temperament: temperament });
});

router.post('/update', jsonParser, async function (req, res, next) {
  await temperamentService.updateTemperament(req.body.Id, req.body.Name);
  if (!req.user) res.render('temperament', { user: null });
  else res.render('temperament', { user: req.user });
});

router.post('/add', jsonParser, async function (req, res, next) {
  console.log(req.body);
  await temperamentService.addTemperament(req.body.Name);
  if (!req.user) res.render('temperament', { user: null });
  else res.render('temperament', { user: req.user });
});

router.delete('/', jsonParser, async function (req, res, next) {
  await temperamentService.deleteTemperament(req.body.Id);
  if (!req.user) res.render('temperament', { user: null });
  else res.render('temperament', { user: req.user });
});

module.exports = router;
