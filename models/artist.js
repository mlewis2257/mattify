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

const albumSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    enum: [
      "Hip-Hop",
      "Alternative",
      "R&B",
      "Electronic",
      "Rock",
      "Country",
      "House",
    ],
  },
  releaseYear: {
    type: Number,
    required: true,
  },
  // artist: {
  //   type: String,
  //   required: true,
  // },
  songs: [songsSchema],
});

const artistSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  songs: [songsSchema],
  // albums: [albumSchema],
});

module.exports = mongoose.model("Artist", artistSchema);
