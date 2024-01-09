var express = require("express");
var router = express.Router();
const { IncomeModel } = require("../schemas/incomeSchema");
const { ExpenseModel } = require("../schemas/expenseSchema");
const mongoose = require("mongoose");
const { dbUrl } = require("../common/dbConfig");
mongoose.connect(dbUrl);

router.get("/get", async function (req, res, next) {
  try {
    let users = await ExpenseModel.find();
    res.status(200).send({
      data: users,
      message: "User Data Fetch Sucessfull!",
    });
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
      error,
    });
  }
});

router.post("/post", async (req, res) => {
  try {
    let expense = await ExpenseModel.create(await req.body);
    console.log(expense);
    res.status(201).send({
      message: "Expense Save Successfull..!",
    });
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
      error,
    });
  }
});

module.exports = router;
