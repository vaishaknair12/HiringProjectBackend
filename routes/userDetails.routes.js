const express = require("express");
const router = express.Router();
const userDetailsController = require("../controllers/userdetails");

router.post('/add', userDetailsController.addUser);
router.get('/getUser', userDetailsController.getUser);
router.get('/getuserByAddress', userDetailsController.getUserById);

module.exports = router;