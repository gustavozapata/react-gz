const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const dotenv = require("dotenv");
dotenv.config();

const uri = process.env.REACT_APP_MONGO_DB;

MongoClient.connect(uri, { useNewUrlParser: true }, (err, db) => {
  var mdb = db.db("reactgz");
  console.log("Connected to the database");

  //get all data from a collection (table)
  mdb
    .collection("users")
    .find({})
    .toArray((err, res) => {
      console.log("users: ", res);
    });
});

const router = express.Router();

router.get("/server.js", (req, res) => {
  mdb
    .collection("users")
    .find({})
    .each((err, items) => {
      console.log(items);
      console.log(res);
    });
});

//TODO: code that make the API call to MongoDB
//https://medium.com/@rossbulat/using-promises-async-await-with-mongodb-613ed8243900

module.exports = router;
