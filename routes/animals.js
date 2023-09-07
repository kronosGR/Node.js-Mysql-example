var express = require('express');
var router = express.Router();
const isMember = require('../middleware/isMember');
const isAdmin = require('../middleware/isAdmin');

const db = require('../models');
const AnimalsService = require('../services/AnimalsService');
const getUrl = require('../utils/getUrl.js');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const animalsService = new AnimalsService(db);

router.get('/:which?', async function (req, res, next) {
  let animals;
  if (!req.params.which) animals = await animalsService.getAnimals();
  if (req.params.which === 'popularname') {
    animals = await animalsService.getAnimalsPopularName();
  }
  if (req.params.which === 'adopted') {
    animals = await animalsService.getAdoptedAnimals();
  }
  if (req.params.which === 'byage') {
    animals = await animalsService.getAnimalsByAge();
  }
  if (req.params.which === 'bysize' && req.user.role === 1) {
    animals = await animalsService.getAnimalsBySize();
  }

  animals.url = getUrl() + 'animals';

  if (!req.user) res.render('animals', { user: null, animals: animals });
  else res.render('animals', { user: req.user, animals: animals });
});

router.post('/', isMember, jsonParser, async function (req, res, next) {
  await animalsService.adoptAnimal(req.body.Id, req.body.UserId);

  if (!req.user) res.render('animals', { user: null });
  else res.render('animals', { user: req.user });
});

router.delete('/', isAdmin, jsonParser, async function (req, res, next) {
  await animalsService.cancelAdoption(req.body.Id);

  if (!req.user) res.render('animals', { user: null });
  else res.render('animals', { user: req.user });
});

module.exports = router;
