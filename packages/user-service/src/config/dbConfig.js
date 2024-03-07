// Assuming your config.ts file has a similar structure
const mongoose = require("mongoose");
const { DB_URL } = require("./config.js");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(DB_URL);
    console.log(`MONGODB CONNECTED: ${connect.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
