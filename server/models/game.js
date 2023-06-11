const { Schema, model } = require("mongoose");

const gameSchema = new Schema({
  gameId: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  background: {
    type: String,
    required: true,
  },
});

const Game = model('Game', gameSchema);

module.exports = Game;
