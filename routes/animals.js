var express = require('express');
var router = express.Router();

const db = require('../models');
const AnimalsService = require('../services/AnimalsService');
const animalsService = new AnimalsService(db);

router.get('/', async function (req, res, next) {
  let animals = await animalsService.getAnimals();
  // console.log(animals[0].dataValues.Age);

  if (!req.user) res.render('animals', { user: null, animals: animals });
  else res.render('animals', { user: req.user, animals: animals });
});

module.exports = router;
