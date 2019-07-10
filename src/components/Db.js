import { MongoClient } from "mongodb";
import PollDao from "./PollDao";

const uri = process.env.REACT_APP_MONGO_DB;

console.log("1. in Db.js");

MongoClient.connect(uri, { useNewUrlParser: true })
  .catch(err => {
    console.log("oops error", err);
  })
  .then(async db => {
    await PollDao.injectDB(db);
  });
