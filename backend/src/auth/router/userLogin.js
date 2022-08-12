
const express = require("express");
const router = express.Router();
const {validationToken } = require("../../helpers/token");
const {login, createUser, revalidationToken} = require("../controller/userLogin");

router.route("/create").post(createUser);

router.route("/verification").post(login);

router.route("/token").get(validationToken, revalidationToken);

module.exports = router;