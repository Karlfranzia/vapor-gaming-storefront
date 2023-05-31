const { Schema, model } = require("mongoose");

const bcrypt = require("bcrypt");

const gameSchema = new Schema({


})

const Game = model('Game', gameSchema);

module.exports = Game;