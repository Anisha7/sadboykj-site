const mongoose = require("mongoose");
assert = require("assert");

const url = process.env.MONGODB_URI || 'mongodb://localhost/sadboykj-site';
mongoose.Promise = global.Promise;

mongoose.connect(
  "mongodb://localhost/sadboykj-site",
  { useNewUrlParser: true }
);

mongoose.connection.on("error", console.error.bind(console, "MongoDB connection Error:"));
mongoose.set("debug", true);

module.exports = mongoose.connection;