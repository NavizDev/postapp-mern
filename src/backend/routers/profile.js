const router = require("express").Router();
const user = require("../models/user_schema");
const formidable = require("formidable");

router.get("/profile/:id", async (req, res) => {
  try {
    let doc = await user.findOne({ _id: req.params.id });
    res.json({ result: "success", doc });
  } catch (error) {
    res.json({ result: "error", message: err.errmsg });
  }
});

router.put("/profile", async (req, res) => {
  try {
    var form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
      let doc = await user.findOneAndUpdate({ _id: fields.id }, fields);
      res.json({ result: "success", message: "Usuario Guardado" });
    });
  } catch (err) {
    res.json({ result: "error", message: err.errmsg });
  }
});

module.exports = router;
