const express = require("express");
const userRouter = require("./routers/user");
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

app.listen(port, () => {
  console.log("Server is running... on port " + port);
});

//Tutorial: https://medium.com/swlh/jwt-authentication-authorization-in-nodejs-express-mongodb-rest-apis-2019-ad14ec818122
