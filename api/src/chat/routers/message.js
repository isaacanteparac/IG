const express = require("express");
const router = express.Router();

const {
  get_,
  delete_,
  post_,
  put_
} = require("../controllers/message");

router.route("/:id").get(get_);

router.route("/:id").delete(delete_);

router.route("/:id").put(put_);

router.route("/").post(post_);

module.exports = router;
