const express = require("express");
const userRouter = require("./routers/user");
const postRoute = require("./routers/post");
const profileRoute = require("./routers/profile");
const conectarDB = require("./db");

const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const port = process.env.PORT || 8080;
conectarDB();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(userRouter);
app.use("/api", postRoute);
app.use("/api", profileRoute);

app.listen(port, () => {
  console.log("Server is running... on port " + port);
});

//Tutorial: https://medium.com/swlh/jwt-authentication-authorization-in-nodejs-express-mongodb-rest-apis-2019-ad14ec818122
