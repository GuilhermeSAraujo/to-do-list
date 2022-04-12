const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes.js");
const database = require("./src/Config/database.js");

const app = express();
database.connect();
app.use(express.json());
app.use(routes);

app.listen(3333);
