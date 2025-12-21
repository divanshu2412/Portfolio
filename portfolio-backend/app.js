const express = require("express");

const AppError = require("./utils/appError");
const customerQueryRouter = require("./Routes/customerQueryRoutes");
// const globalErrorHandler = require("./Controllers/errorController");
const app = express();

// Routes
app.use("/api/v1/customer-query", customerQueryRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`can't find ${req.originalUrl} on this server`));
});

// app.use(globalErrorHandler);

module.exports = app;
