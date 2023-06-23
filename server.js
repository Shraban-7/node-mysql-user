require("dotenv").config();
const express = require("express");
const cors = require("cors");
const apiRoute = require("./routes/routes");
const bodyParser = require("body-parser");
const app = express();

const { sequelize, connectToDB } = require("./config/dbConnection");
// const User = require('./models/User')

const port = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", apiRoute);

app.get("/", (req, res) => {
  res.json({
    message: "this service is ok",
  });
});

app.listen(port, async () => {
  console.log(`server running port  http://localhost:${port}`);
  await connectToDB();
});
