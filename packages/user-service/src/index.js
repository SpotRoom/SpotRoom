const express = require("express");

const { PORT } = require("./config/config");

const cookieParser = require("cookie-parser");
const app = express();
const cors = require("cors");

const authRotue = require("./Routes/AuthRoutes");
const connectDB = require("./config/dbConfig");

app.use(express.json());
app.use(express.urlencoded());
const corsOptions = {
  origin: "http://localhost:5050",
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(cookieParser("KUCH-BI-BC"));
app.use("/api", authRotue);

connectDB();

app.listen(PORT, () => console.log(`Server is running at: ${PORT}`));
