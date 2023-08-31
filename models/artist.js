const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const songsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  artist: String,
  album: String,
  genre: String,
});

const artistSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  songs: [songsSchema],
});

module.exports = mongoose.model("Artist", artistSchema);
