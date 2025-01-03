import express from 'express';
import connectDB from './src/infrastructure/db.mjs';

const app = express();
const port = 4000;

connectDB().then(()=>{
    console.log("DataBase Connected")
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
})
.catch(()=>{
    console.log("DataBase Connection Failed")
})

app.get("/",(req,res)=>{
res.send("hello world")
})
//hello world
