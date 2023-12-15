// import {Request,Response} from "express";
import express from "express";
// import fetchData from "./utils/fetchdata";
import cors from "cors";
import dotenv from "dotenv"
import v1Router from './routes/v1/index'; 
dotenv.config()
const app  =express();
console.log("Hello");

const PORT = process.env.PORT
app.use(cors()) // Use this after the variable declaration


app.use('/v1',v1Router);
// app.get('/v1/health',(req:Request,res:Response)=>{
//     console.log("Healthy...");
//     res.json("Api is healthy");
// })

// app.get('/v1/top/:num',async(req:Request,res:Response)=>{
//     const {num}= req.params;
//     console.log(num);
//     try {
//     const data = await fetchData(Number(num),1);
//     console.log(data.items.length);
//         if(data){
//            return res.status(202).json(data);
//         }
//         else{
//             throw res.status(404)
//         }
//     } catch (error) {
//         console.error(error)
//     }

// })

// app.get('/v1/batch/:num/:page',async(req:Request,res:Response)=>{
//     const {num,page} = req.params;
//     console.log(num,page);
//     try {
//         const data = await fetchData(Number(num),Number(page));
//         console.log(data);
//         if(data){
//             return res.status(202).json(data);
//         }
//         else{
//             throw res.status(404)
//         }
//     } catch (error) {
//      console.error(error)   
//     }
// })
app.listen(PORT,()=>{
console.log(`App running on ${PORT}`);
})