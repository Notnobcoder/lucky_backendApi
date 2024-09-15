import express from 'express'
import { Connection } from './database/db.js';
import DefaultData from './default.js';
import Router from './routes/route.js'
import bodyParser from 'body-parser';
// TODO: dotenv config start
import dotenv from "dotenv"
dotenv.config()
// TODO: dotenv config end

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);

app.get("/test", (req, res) => {
  res.json({ message: "working" })

})

const PORT = process.env.PORT || 9000;

Connection();

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

DefaultData();
