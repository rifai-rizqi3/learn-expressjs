const express = require("express");
const router = express.Router();
const userController = require("../controller/users.js");

// CREATE - POST
router.post("/", userController.createNewUser);

// READ - GET
router.get("/", userController.getAllUsers);

// UPDATE - PATCH
router.patch("/:idUser", userController.updateUser);

// DELETE - DELETE
router.delete("/:idUser", userController.deleteUser);

module.exports = router;
