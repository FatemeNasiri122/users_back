"use strict";
const express = require("express");
const user = require("../controller/user");

const router = express.Router();

router.get("/users", user.getUsers);
router.post("/add-user", user.addUser);
router.put("/edit-user/:id", user.editUser);
router.delete("/delete-user", user.deleteUser);

module.exports = router;