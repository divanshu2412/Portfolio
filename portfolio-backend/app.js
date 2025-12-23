const express = require("express");
const cors = require("cors");

const AppError = require("./utils/appError");
const customerQueryRouter = require("./Routes/customerQueryRoutes");
// const globalErrorHandler = require("./Controllers/errorController");
const app = express();

// ✅ Enable CORS
app.use(
  cors({
    origin: "http://localhost:5173", // frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
// 👇 THIS IS MISSING
app.use(express.json()); // parses application/json

// Routes
app.use("/api/v1/customer-query", customerQueryRouter);


module.exports = app;
