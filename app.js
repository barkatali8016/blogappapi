const express =require('express');
const app=express();
const userRoutes=require('./user/userroutes');
const userAuthRoutes=require('./user/userauthroutes')
const postAuthRoutes=require('./post/postauthroutes')
const cors = require("cors")

app.use(express.json());

app.use(cors());
//http://localhost:3000/api/user/register

//http://localhost:3000/api/user/login
app.use('/api/user',userRoutes);

//http://localhost:3000/api/auth/user/profile
//http://localhost:3000/api/auth/user/profile/update

app.use('/api/auth/user',userAuthRoutes);

 //http://localhost:3000/api/auth/post/addpost
 app.use('/api/auth/post',postAuthRoutes);

app.listen(3000,()=>{
    console.log(`Server is running on the port http://localhost:3000`);
})

