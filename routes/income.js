var express = require("express");
var router = express.Router();
const { IncomeModel } = require("../schemas/incomeSchema");
const { ExpenseModel } = require("../schemas/expenseSchema");
const mongoose = require("mongoose");
const { dbUrl } = require("../common/dbConfig");
mongoose.connect(dbUrl);

router.get("/get", async function (req, res, next) {
  try {
    let users = await IncomeModel.find();
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
    let income = await IncomeModel.create(await req.body);
    console.log(income);
    res.status(201).send({
      message: "Income Save Successfull..!",
    });
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
      error,
    });
  }
});

module.exports = router;
