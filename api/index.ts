import { PrismaClient } from '@prisma/client';
import express,{ Express,Request, Response} from 'express';
import taskRouter from './routers/task.router';




export const prisma=new PrismaClient();


const app:Express=express();

const PORT=8000;
app.use(express.json());



app.use('/tasks',taskRouter);

app.get('',(req:Request,res:Response)=>{

    return res.status(200).send(`<a><h1>Hello world</h1></a>`);
});

app.listen(PORT,()=>{
    // await fakeTask();
    console.info(`server running in http://localhost:${PORT}`);
})