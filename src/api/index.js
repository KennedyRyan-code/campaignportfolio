const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const blogRoute = require("./routes/blogs");
const collabRoute = require("./routes/collaborate");
const joinUsRoute = require("./routes/joinUs");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = [
  "https://realcosmic.tech",
  "https://www.realcosmic.tech",
];
if (process.env.NODE_ENV === "development") {
  allowedOrigins.push("http://localhost:5173");
}
app.use(cors({ origin: allowedOrigins, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    // Start your server only AFTER successful database connection
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

// Routes
app.use("/api/blogs", blogRoute);
app.use("/api/collaborate", collabRoute);
app.use("/api/joinUs", joinUsRoute);
