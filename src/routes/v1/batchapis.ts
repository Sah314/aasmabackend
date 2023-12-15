import express from 'express';
import { Request,Response } from 'express';
import fetchData from '../../utils/fetchdata';
const router = express.Router();


router.get('/:num/:page',async(req:Request,res:Response)=>{
    const {num,page} = req.params;
    console.log(num,page);
    try {
        const data = await fetchData(Number(num),Number(page));
        console.log(data);
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