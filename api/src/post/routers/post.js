const express = require("express");
const router = express.Router();


const {
    get_,
    idGet_,
    delete_,
    put_,
    post_,
    getIdUser_
} = require("../controllers/post");

router.route("/").get(get_);

router.route("/:id").get(idGet_)

router.route("/:id").delete(delete_);

router.route("/put/:id").put(put_);

router.route("/send").post(post_);

router.route("/user/:id").get(getIdUser_);





module.exports = router;