import {Request,Response} from "express";
import express from "express";
import axios from "axios";
import dta from "./utils/fetchdata";
const app  =express();
console.log("HEllo");

const githubdata = dta;
const PORT = 3000

app.get('/v1/health',(req:Request,res:Response)=>{
    console.log(githubdata);
    res.json("Api is healthy");
})


app.listen(PORT,()=>{
console.log(`App running on 3000`);
})