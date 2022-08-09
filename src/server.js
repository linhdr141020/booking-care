import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import connectDB from "./config/connectDB";

require("dotenv").config();

let app = express();

//config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);

connectDB();

//Port == underfine => port = 6969
const port = process.env.PORT || 6969;

app.listen(port, () => {
  console.log(`Backend Nodejs is running on the port ${port} `);
});
