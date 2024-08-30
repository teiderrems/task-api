
import { prisma } from "..";

export type TaskType={
    
    id:number,
    title:string,
    content:string,
    done:boolean,
    createAt?:Date,
    updateAt?:Date
};

export class TaskService{

    public async findAll():Promise<any>{
        console.log("hello world");
        return (await prisma.task.findMany());
    }


    public async findOne(id:number):Promise<TaskType |any>{

        return await prisma.task.findUniqueOrThrow({
            where:{
                id
            }
        });
    }

    public async create(task:TaskType):Promise<TaskType |any >{

        return await prisma.task.create({
            data:{
                title:task.title,
                content:task.content,
                done:task.done??false
            }
        });
    }


    public async update(id: number, task:Partial<TaskType>):Promise<TaskType |any >{

        return await prisma.task.update({
            where:{
                id
            },
            data:{
                title:task.title,
                content:task.content,
                done:task.done
            }
        });
    }


    public async delete(id:number):Promise<any>{

        return await prisma.task.delete({
            where:{
                id
            }
        });
    }

}