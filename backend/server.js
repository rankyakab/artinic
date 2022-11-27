import express from "express";
import passport from "passport";
import passportConfig from "./config/passport.js";
import cors from 'cors';
import bodyParser from "body-parser";
import * as env from "dotenv";
import crypto from "crypto";
import routes from './routes/index.js';
import connect from "./database/mongodb.js";
//import passportConfig from "./config/passport.js";
env.config()

const PORT = process.env.PORT || 4000;
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize()); 
passportConfig(passport);


app.get("/", (req, res) => {
    res.send(crypto.randomBytes(32).toString("hex"));
  });
  
app.use("/", routes);


await connect();

app.listen(process.env.PORT || 4000, ()=> {
    console.log("Server is running at http://localhost:4000");
    console.log(process.env.PORT);
})