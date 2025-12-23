const crypto = require("crypto");
const CustomerQuery = require("../Models/customerQuery");

// 1) Create new Customer records
exports.create = async (req, res) => {
  try {
    console.log(req.body);
    const customerQuery = await CustomerQuery.create({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    });
    res.status(201).json({
      status: "Success",
      data: customerQuery,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// 2) get All Customers
exports.getAll = async (req, res) => {
  try {
    const customerQuery = await CustomerQuery.find();
    res.status(200).json({
      status: "Success",
      data: customerQuery,
    });
  } catch (err) {
    res.status(500).json({
      status: "Fail",
      message: err.message,
    });
  }
};
