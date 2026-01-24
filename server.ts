import app from './src/app';
import chalk from 'chalk';


const startServer = () =>{
    const port = process.env.PORT || 3000;

    app.listen(port, ()=>{
        console.log(`Server are Runinng: ${port}`)
    })
}

startServer()