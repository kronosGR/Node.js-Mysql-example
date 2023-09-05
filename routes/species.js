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
  if (!req.user) res.render('index', { user: null });
  else res.render('index', { user: req.body });
});

module.exports = router;
