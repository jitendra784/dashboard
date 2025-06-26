require("dotenv").config();
const express = require("express");
const registerRoutes = require("./route/register_route");

const app = express();
app.use(express.json());

// Routes
app.use("/api", registerRoutes);

module.exports = app;
