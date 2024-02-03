const express = require("express");
const multer = require("multer");

const upload = multer();
const router = express.Router();

const {
  createStudent,
  findUserById,
} = require("../Controller/student_controller");
const { updateUserDataById } = require("../Controller/update_student");
const { deleteUserDataById } = require("../Controller/delete_student");

router.post("/insert", upload.none(), createStudent);
router.get("/getCall", findUserById);
router.put("/update", updateUserDataById);
router.delete("/delete", deleteUserDataById);

module.exports = router;
