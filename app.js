const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const questionRouter = require("./api/controllers/question/router");

const app = express();
const PORT = process.env.PORT || 2000;

mongoose.connect(process.env.MONGO_DB, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});

const db = mongoose.connection;

db.once("open", () => console.log("DataBase connected !!"));

app.use(express.json());
app.use(morgan("combined"));
app.use(cors());
app.use(helmet());

app.use("/question", questionRouter);

app.listen(PORT, () => console.log("Listening on http://localhost" + PORT));
