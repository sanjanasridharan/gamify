const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gamification = new Schema({
  username:{type:String,required:true},
  movieName: { type: String, required: true },
  img: { type: String, required: true },
  level: { type: Number, required: true },
  
}, {
  timestamps: true,
});

const Game = mongoose.model('Game', gamification);

module.exports = Game;