const express = require("express");
const router = express.Router();
const playlistCtrl = require("../controllers/playlists");
const ensureLogin = require("../config/ensureLogin");

router.get("/", playlistCtrl.index);
router.get("/new", ensureLogin, playlistCtrl.new);
router.post("/", ensureLogin, playlistCtrl.create);
router.get("/:id", playlistCtrl.show);
router.post("/:id", ensureLogin, playlistCtrl.addToPlaylist);
router.get("/:id/edit", playlistCtrl.edit);
router.put("/:id", ensureLogin, playlistCtrl.update);
router.delete("/:id", ensureLogin, playlistCtrl.delete);

module.exports = router;
