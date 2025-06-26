require("dotenv").config();
const express = require("express");
const signRoutes = require("./routes/sign_router");

const app = express();
app.use(express.json());

// Routes
app.use("/api", signRoutes);

module.exports = app;
