const express = require("express");
const customerQueryController = require("../Controllers/customerQueryController");

const router = express.Router();

router.route("/create").post(customerQueryController.create);
router.route("/getAll").get(customerQueryController.getAll);
router.route("/delete/:id").delete(customerQueryController.delete);
router.route("/update/:id").put(customerQueryController.update);
module.exports = router;
