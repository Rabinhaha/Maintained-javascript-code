const mongoose = require("mongoose");
const { MONGO_URI } = require("../config/config.js");

const connectDb = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to mongoDb");
  } catch (error) {
    console.error("connection failed", error.message);
    process.exit(1); //stops the server
  }
};
module.exports = connectDb;
