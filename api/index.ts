import { ExpressAuth } from "@auth/express"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "../lib/prisma";
import express from 'express';
import helmet from "helmet";
import GitHub from "@auth/express/providers/github";

 
const app = express()
 

const PORT=Number(process.env.PORT)??8000;

app.set("trust proxy", true)
app.use(
  "/api/auth/*",
  ExpressAuth({
    providers: [GitHub],
    adapter: PrismaAdapter(prisma),
  })
);


app.use(helmet());

app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
})
