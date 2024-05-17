const router=require("express").Router();
const auth=require("../middleware/auth");
const expense = require("../models/expenseModel");

router.post("/",auth,async(req,res)=>{
    try{
        const {title}=req.body;
        const {cost}=req.body;
        const {month}=req.body;
        const {year}=req.body;
        if(!title)
            return res.status(400).json({msg: "Not all fields have been entered"});
        if(!cost)
            return res.status(400).json({msg: "Cost field have not been entered"});
        if(!month)
            return res.status(400).json({msg: "Month field have not been entered"});
        if(!year)
            return res.status(400).json({msg: "Year field have not been entered"});
        const newExpense=new expense({
            title,month,year,cost,
            userId: req.user,
        });
        const saveExpense=await newExpense.save();
        res.json(saveExpense);
    }catch(err){
        res.status(500).json({error:err.message});
    }
});
router.get("/getexpense",auth,async(req,res)=>{
    const expenses=await expense.find({userId: req.user, month:req.query.month , year:req.query.year});
    res.json(expenses);
});


module.exports=router;