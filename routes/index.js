var express = require('express');
var router = express.Router();
const {IncomeModel} = require('../schemas/incomeSchema');
const {ExpenseModel} = require('../schemas/expenseSchema');
const mongoose = require('mongoose')
const {dbUrl} = require('../common/dbConfig')
mongoose.connect(dbUrl)

/* GET home page. */
router.get("/", async function (req, res, next) {
  try {
    let users = await IncomeModel.find();
    res.status(200).send({
      users,
      message: "User Data Fetch Sucessfull!",
    });
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
      error,
    });
  }
});

router.get("/", async function (req, res, next) {
  try {
    let users = await ExpenseModel.find();
    res.status(200).send({
      users,
      message: "User Data Fetch Sucessfull!",
    });
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
      error,
    });
  }
});

module.exports = router;
