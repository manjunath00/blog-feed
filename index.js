require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();

const authRoutes = require("./routes/auth");
const categoryRoutes = require("./routes/category");
const articleRoutes = require("./routes/article");
const userRoutes = require("./routes/user");

// database connections
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DATABASE CONNECTED");
  })
  .catch((error) => {
    console.log("DAtabase not connected", error);
  });

// middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//routes
app.use("/api", authRoutes);
app.use("/api", categoryRoutes);
app.use("/api", articleRoutes);
app.use("/api", userRoutes);

app.get("/", (req, res) => {
  res.send("<h2>Home screen</h2>");
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html")); // relative path
  });
}

//port
const PORT = process.env.PORT;

//Starting the server
app.listen(PORT, () =>
  console.log(`Server started at http://localhost:${PORT}`)
);
