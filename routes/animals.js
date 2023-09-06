var express = require('express');
var router = express.Router();

const db = require('../models');
const AnimalsService = require('../services/AnimalsService');
const getUrl = require('../utils/getUrl.js');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const animalsService = new AnimalsService(db);

router.get('/', async function (req, res, next) {
  let animals = await animalsService.getAnimals();
  animals.url = getUrl() + 'animals';

  if (!req.user) res.render('animals', { user: null, animals: animals });
  else res.render('animals', { user: req.user, animals: animals });
});

router.post('/', jsonParser, async function (req, res, next) {
  await animalsService.adoptAnimal(req.body.Id, req.body.UserId);

  if (!req.user) res.render('animals', { user: null });
  else res.render('animals', { user: req.user });
});

module.exports = router;
