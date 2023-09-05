var express = require('express');
var router = express.Router();
const SpeciesService = require('../services/SpeciesService.js');
const db = require('../models');

const speciesService = new SpeciesService(db);

router.get('/', async function (req, res, next) {
  species = await speciesService.getSpecies();
  console.log(species);
  if (!req.user) {
    res.render('species', { user: null });
  } else {
    res.render('species', { user: req.user });
  }
});

router.post('/update', async function (req, res, next) {
  res.render('index', { user: null });
});

module.exports = router;
