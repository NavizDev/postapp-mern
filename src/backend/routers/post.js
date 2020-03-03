const router = require("express").Router();
const verify = require("../middleware/check-auth");

router.get("/post", verify, (req, res) => {
  res.json({
    post: {
      title: "My first post",
      description: "random data"
    }
  });
});

module.exports = router;
