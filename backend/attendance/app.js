require("dotenv").config();
const express = require("express");
const attendanceRoutes = require("./route/attend_route");

const app = express();
app.use(express.json());

// Routes
app.use("/api", attendanceRoutes);

module.exports = app;