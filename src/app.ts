import express from 'express'

import globalErrorHandler from './middleware/globalErrorHandler';


const app = express();


app.get('/health', (req,res,next)=>{
    
  
    res.json({message:"Server are Health"})
})

// Gloabal Error Handler

app.use(globalErrorHandler);

export default app;