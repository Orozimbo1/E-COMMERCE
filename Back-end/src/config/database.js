import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/OnlineShop");

let database = mongoose.connection;

export default database;