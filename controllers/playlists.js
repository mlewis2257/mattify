const Artist = require("../models/artist");
const Playlist = require("../models/playlist");
const User = require("../models/user");

module.exports = {
  index,
  new: newPlaylist,
  create,
  show,
  addToPlaylist,
  edit,
  update,
  delete: deletePlaylist,
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

async function addToPlaylist(req, res) {
  const playlist = await Playlist.findById(req.params.id);
  playlist.artists.push(req.body.artist);
  await playlist.save();
  console.log(playlist, req.body);
  res.redirect(`/playlists/${playlist.id}`);
}

async function show(req, res) {
  const playlist = await Playlist.findById(req.params.id).populate("artists");
  const artists = await Artist.find({});
  console.log(playlist);
  res.render("playlists/show", { title: "Playlist", playlist, artists });
}

async function edit(req, res) {
  const playlist = await Playlist.findById(req.params.id);
  if (!playlist) return res.redirect("/playlists");
  res.render("playlists/edit", { playlist });
}

async function update(req, res) {
  const playlist = await Playlist.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.redirect(`/playlists/${playlist.id}`);
}
async function deletePlaylist(req, res) {
  await Playlist.findByIdAndDelete(req.params.id);
  res.redirect("/playlists");
}
