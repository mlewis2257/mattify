const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playlistSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  songs: [String],
});

module.exports = mongoose.model("Playlist", playlistSchema);
