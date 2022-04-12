const express = require("express");
var cors = require('cors');
const routes = require("./routes.js");
const database = require("./src/Config/database.js");

const app = express();
database.connect();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
