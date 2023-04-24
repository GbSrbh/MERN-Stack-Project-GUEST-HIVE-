const mongoose = require('mongoose');
const config = require('config');

const uri = config.get("mongoURI");

const mongoConnect = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Mongo DB Connected!!")
  } catch (err) {
    console.error(err.message);
    return;
  }
}

module.exports = mongoConnect; 