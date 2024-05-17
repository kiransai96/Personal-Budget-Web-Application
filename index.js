const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());
const PORT= process.env.PORT || 5000
app.listen(PORT, ()=>console.log(`The server started on port:${PORT}`));

//set up mongoose 

// MONGODB_CONNECTION_STRING= "mongodb+srv://akhil21:Uncc!12345@finalproject.8bshq.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect('mongodb+srv://akhil21:Uncc!12345@finalproject.8bshq.mongodb.net/<dbname>?retryWrites=true&w=majority', 
    {
     useNewUrlParser: true,
     useUnifiedTopology: true,
     useCreateIndex:true,
    }, (err) => {
        if(err) throw err;
        console.log("DB connected successfully");
    });

app.use("/users",require("./routes/UserRouter"));    
app.use("/budget",require("./routes/BudgetRouter"));
app.use("/expense",require("./routes/ExpenseRouter"));