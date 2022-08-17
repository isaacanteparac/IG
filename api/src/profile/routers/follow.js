const express = require("express");
const router = express.Router();

const {
  getFollower_,
  getFollowing_,
  countFollower_,
  countFollowing_,
  delete_,
  post_
} = require("../controllers/follow");

router.route("/follower/:id").get(getFollower_);

router.route("/following/:id").get(getFollowing_);

router.route("/count/follower/:id").get(countFollower_);

router.route("/count/following/:id").get(countFollowing_);

router.route("/:id").delete(delete_);

router.route("/").post(post_);

module.exports = router;
