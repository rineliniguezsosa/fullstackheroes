import express from 'express';
import 'dotenv/config';

const app = express();
app.use(express.json())

app.listen(`${process.env.PORT}`,()=>{
    console.log(`El servidor esta corriendo en http://localhost:${process.env.PORT}`);
})