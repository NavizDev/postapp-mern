const express = require("express");
const bcrypt = require("bcrypt");
const Users = require("../models/user_schema");
const { registerValidation, loginValidation } = require("../validation");

const router = express.Router();

router.get("/", function(req, res) {
  console.log("enviando peticion GET");
  return res.send("Hello Nodejs, iam Juan. ");
});

router.post("/register", async (req, res) => {
  //Validate data with schema
  const { error } = registerValidation(req.body);
  if (error)
    return res.json({
      result: "error",
      message: `${error.details[0].message}`
    });

  //Checking if the email is already in the database
  const emailExist = await Users.findOne({ email: req.body.email });
  if (emailExist)
    return res.json({ result: "error", message: `Email ya existe.` });

  //Checking if the username is already in the database
  const usernameExist = await Users.findOne({ username: req.body.username });
  if (usernameExist)
    return res.json({
      result: "error",
      message: `Nombre de usuario ya existe`
    });
  try {
    //Hash Password
    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);
    await Users.create(req.body);
    res.json({ result: "success", message: "Registro satisfactorio" });
  } catch (err) {
    res.json({ result: "error", message: err.errmsg });
  }
});

router.post("/login", async (req, res) => {
  //VALIDATE DATA
  const { error } = registerValidation(req.body);
  if (error)
    return res.json({
      result: "error",
      message: `${error.details[0].message}`
    });

  //checking if the email exists
  const emailExist = await Users.findOne({ email: req.body.email });
  if (!emailExist)
    return res.json({
      result: "error",
      message: `Email no existe.`
    });
});

module.exports = router;
