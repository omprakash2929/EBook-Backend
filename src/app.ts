import express from 'express'

import globalErrorHandler from './middleware/globalErrorHandler';
import userRouter from './user/userRouter';


const app = express();

app.use(express.json())

app.get('/health', (req,res,next)=>{
    
  
    res.json({message:"Server are Health"})
});

//* User Routes
app.use('/api/users',userRouter)




// Gloabal Error Handler

app.use(globalErrorHandler);

export default app;