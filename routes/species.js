var express = require('express');
var router = express.Router();
const SpeciesService = require('../services/SpeciesService.js');
const db = require('../models');
const getUrl = require('../utils/getUrl.js');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const speciesService = new SpeciesService(db);

router.get('/', async function (req, res, next) {
  species = await speciesService.getSpecies();
  species.url = getUrl() + 'species';
  if (!req.user) {
    res.render('species', { user: null });
  } else {
    res.render('species', { user: req.user });
  }
});

router.post('/update', jsonParser, async function (req, res, next) {
  await speciesService.updateSpecie(req.body.Id, req.body.Name);
  if (!req.user) res.render('species', { user: null });
  else res.render('species', { user: req.user });
});

router.post('/add', jsonParser, async function (req, res, next) {
  await speciesService.addSpecie(req.body.Name);
  if (!req.user) res.render('species', { user: null });
  else res.render('species', { user: req.user });
});

router.delete('/', jsonParser, async function (req, res, next) {
  await speciesService.deleteSpecie(req.body.Id);
  if (!req.user) res.render('species', { user: null });
  else res.render('species', { user: req.user });
});

module.exports = router;
