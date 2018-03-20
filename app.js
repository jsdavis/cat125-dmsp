const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.listen(3000, err => {
  if (err) console.log(err);
  else console.log("Listening on port 3000");
});
