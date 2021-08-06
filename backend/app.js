import express from "express";
import bodyParser from "body-parser";
import pkg from "mongoose";
const { connect, set } = pkg;
import cors from "cors";
import employee from "./routes/employeeRoutes.js";
import "dotenv/config";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(cors());

//middleware
app.use("/employee", employee);

set("useNewUrlParser", true);
set("useFindAndModify", false);
set("useCreateIndex", true);
set("useUnifiedTopology", true);

// connect to database

connect(process.env.DB_CONNECTION)
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));

app.listen(5000);
