const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playlistSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  artists: [
    {
      type: Schema.Types.ObjectId,
      ref: "Artist",
    },
  ],
});

module.exports = mongoose.model("Playlist", playlistSchema);
