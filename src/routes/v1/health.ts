import express from 'express';
import { Request,Response } from 'express';
const healthRouter = express.Router();

healthRouter.get('/',(req:Request,res:Response)=>{
    console.log("Healthy...");
    res.json("Api is healthy");
})


export default healthRouter