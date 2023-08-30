const Artist = require("../models/artist");
const Playlist = require("../models/playlist");
const User = require("../models/user");

module.exports = {
  index,
  new: newPlaylist,
  create,
  show,
};

async function index(req, res) {
  const playlists = await Playlist.find({});
  res.render("playlists/index", { playlists });
}

async function newPlaylist(req, res) {
  res.render("playlists/new");
  //   await playlist.save();
}

async function create(req, res) {
  console.log(req.body);
  const playlist = await Playlist.create(req.body);
  res.redirect(`/playlists`);
}

async function show(req, res) {
  const playlist = await Playlist.findById(req.params.id).populate("songs");
  res.render("playlists/show", { playlist });
}
