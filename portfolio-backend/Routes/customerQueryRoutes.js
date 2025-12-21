const express = require("express");
const customerQueryController = require("../Controllers/customerQueryController");

const router = express.Router();

router.route("/create").post(customerQueryController.create);
router.route("/getAll").get(customerQueryController.getAll);
// router.route("/:id").patch(customerQueryController.updateCustomerQuery);
// router.route("/:id").delete(customerQueryController.deleteCustomerQuery);

module.exports = router;
