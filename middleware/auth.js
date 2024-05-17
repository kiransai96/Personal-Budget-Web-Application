const jwt=require('jsonwebtoken');
const auth =  (req,res,next)=>{
    try{
    const token=req.header("x-auth-token")
    console.log(token);
    if(!token)
        return res.status(401).json({msg: "No authentication token,authorization denied"});
    const verified=jwt.verify(token, process.env.password);
    console.log(verified);
    if(!verified)
        return res.status(401).json({msg: "Token verification failed."});
    req.user=verified.id;
    console.log(req.user);
    next();
    }catch(err){
        res.status(500).json({error: err.message})
    }
};

module.exports=auth;