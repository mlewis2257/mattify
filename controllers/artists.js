const Artist = require("../models/artist");

module.exports = {
  index,
};

async function index(req, res) {
  const artists = await Artist.find({});
  res.render("artists/index", { artists });
}

async function show(req, res) {
  const artist = await Artist.findById(req.params.id);
  res.render("artists/show", { title: "Artist", artist });
}
