var express = require('express');
var router = express.Router();
const {IncomeModel} = require('../schemas/incomeSchema');
const {ExpenseModel} = require('../schemas/expenseSchema');
const mongoose = require('mongoose')
const {dbUrl} = require('../common/dbConfig')
mongoose.connect(dbUrl)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(
    `<h1>Money Manager</h1>`
  );
});



module.exports = router;
