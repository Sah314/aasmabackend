import express from 'express';
import { Request,Response } from 'express';
import fetchData from '../../utils/fetchdata';
const router = express.Router();



router.get('/:num',async(req:Request,res:Response)=>{
    const {num}= req.params;
    console.log(num);
    try {
    const data = await fetchData(Number(num),1);
    console.log(data.items.length);
        if(data){
           return res.status(202).json(data);
        }
        else{
            throw res.status(404)
        }
    } catch (error) {
        console.error(error)
    }

})

export default router;