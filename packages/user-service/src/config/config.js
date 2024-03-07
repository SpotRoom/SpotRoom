const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  PORT: process.env.PORT || 5050,
  DB_URL: process.env.DB_URL || "mongodb://127.0.0.1:27017/user-service",
  TOKEN_SCEC: process.env.TOKEN || "kuchbibc",
};
