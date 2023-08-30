require("dotenv").config();
require("./config/database");

const Artist = require("./models/artist");
const data = require("./data");

(async () => {
  await Artist.deleteMany({});

  let results = await Artist.create(data.artists);
  console.log(results);
  process.exit();
})();
