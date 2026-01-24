import express from 'express'


const app = express();


app.get('/health', (req,res,next)=>{
    res.json({message:"Server are Health"})
})

export default app;