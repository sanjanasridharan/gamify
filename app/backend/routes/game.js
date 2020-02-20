const router = require('express').Router();
let Game = require('../models/data');

router.route('/').get((req, res) => {
  Game.find()
    .then(games => res.json(games))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username=req.body.username;
  const movieName = req.body.movieName;
  const img = req.body.img;
  const level= Number(req.body.level);
  

  const newGame = new Game({
    username,
    movieName,
    img,
    level,
    
  });

  newGame.save()
  .then(() => res.json('game added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/name').get((req, res) => {
    console.log(req.query)
    
     let u=req.query.name
    Game.find({"username":u}).sort({"level":-1})
      .then(games => res.json(games))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;