const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
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
  const { error } = loginValidation(req.body);
  if (error)
    return res.json({
      result: "error",
      message: `${error.details[0].message}`
    });

  //checking if the email exists
  const user = await Users.findOne({ email: req.body.email });
  if (!user)
    return res.json({
      result: "error",
      message: `Email no registrado.`
    });

  //Password
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass)
    return res.json({ result: "error", message: "Password incorrecto" });

  //create and assign a token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res
    .header("auth-token", token)
    .json({ result: "success", token, message: "Login successfully" });

  //res.json({ result: "success", message: "Usted esta logueado" });
});

module.exports = router;

//https://www.youtube.com/watch?v=2jqok-WgelI
