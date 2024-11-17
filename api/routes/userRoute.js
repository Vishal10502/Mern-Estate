import express from 'express';
import { test } from '../controllers/userController.js';


const router = express.Router();


//all the routes should be defined inside the index.js, so we will export the router 

//to get the info from the database 

// moreover we need to put this logic inside the separate folder 

// this logic->
//router.get('/test',(req,res)=>{
//     res.json({
//         message:"hello world",
//     });
// });

// that's why we will create controllers

router.get('/test', test);

export default router;