const express = require("express");
const router = express.Router();


const {
  deleteIdUser,
  getUser,
  getIdUser,
} = require("../controller/userView");

router.route("/").get(getUser);

router.route("/:id").delete(deleteIdUser);

router.route("/:id").get(getIdUser);



module.exports = router;