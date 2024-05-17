const mongoose=require("mongoose");

const expenseSchema = new mongoose.Schema({
    title:{type:String,required:true},
    month:{type:Number,required:true},
    year:{type:Number,required:true},
    cost:{type:Number,required:true},
    userId:{type:String,required:true}
});

module.exports = Expense = mongoose.model("expense",expenseSchema);