const express = require("express");
const router = express.Router();


const {
    getCount_,
    idGetUser_,
    delete_,
    post_,
} = require("../controllers/heart");

router.route("/count/:id").get(getCount_)

router.route("/user/:id").get(idGetUser_)

router.route("/:id").delete(delete_);

router.route("/").post(post_);







module.exports = router;