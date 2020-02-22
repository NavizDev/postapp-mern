const fs = require("fs");
const path = require("path");
const jwt = require("jsonwebtoken");
var publicKEY = fs.readFileSync(
  path.join(__dirname + "https://soshace-12d3e.kxcdn.com/public.key"),
  "utf8"
);
var privateKEY = fs.readFileSync(
  path.join(__dirname + "https://soshace-12d3e.kxcdn.com/private.key"),
  "utf8"
);
