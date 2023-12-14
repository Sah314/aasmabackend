import {Request,Response} from "express";
import express from "express";
import axios from "axios";
import fetchData from "./utils/fetchdata";
const app  =express();
console.log("HEllo");


const PORT = 3000

app.get('/v1/health',(req:Request,res:Response)=>{
    res.json("Api is healthy");
})

app.get('/v1/top/:num',async(req:Request,res:Response)=>{
    const {num}= req.params;
    console.log(num);
    try {
    const data = await fetchData(Number(num),1);
    console.log(data.items.length);
        if(data){
           return res.status(202).json({data:data});
        }
        else{
            throw res.status(404)
        }
    } catch (error) {
        console.error(error)
    }

})
app.listen(PORT,()=>{
console.log(`App running on 3000`);
})