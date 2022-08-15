const express = require("express");
const router = express.Router();


const {
    get_,
    delete_,
    post_,
} = require("../controllers/comment");

router.route("/:id").get(get_)

router.route("/:id").delete(delete_);

router.route("/").post(post_);







module.exports = router;