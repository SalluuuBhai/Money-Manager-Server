const mongoose = require('mongoose');

const IncomeSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
        trim : true,
        maxLength : 50
    },
    amount : {
        type : Number,
        required : true,
        trim : true,
        maxLength : 20
    },
    type : {
        type : String,
        default : "income"
    },
    date: {
        type: Date,
        required: true,
        trim: true
    },
    type: {
        type: String,
        required: true,
        trim: true
    },
    comment: {
        type: String,
        required: true,
        maxLength: 20,
        trim: true
    },
    createdAt : {
        type : Date,
        default : Date.now

    }
},
{
    collection : 'income',
    versionKey : false
},
{timestamps: true}
)

let IncomeModel = mongoose.model('Income', IncomeSchema)
module.exports = {IncomeModel}
