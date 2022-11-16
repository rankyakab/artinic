import express from "express";
import cors from 'cors';
import bodyParser from "body-parser";
import * as env from "dotenv";
import routes from './routes/index.js';
import connect from "./database/mongodb.js";
env.config()

const PORT = 4000;
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Hello World");
  });
  
app.use("/", routes);


await connect();

app.listen(PORT, ()=> {
    console.log("Server is running at http://localhost:4000");
})