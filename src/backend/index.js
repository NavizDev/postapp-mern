const express = require("express");
const conectarDB = require("./db");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(cors());

conectarDB();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/", function(req, res, next) {
  return res.send("Hello Nodejs, iam Juan. ");
});
const port = 8080;
app.listen(port, () => {
  console.log("Server is running... on port " + port);
});
