
import { prisma } from "..";

export type CommentType={
    
    id:number,
    title:string,
    content:string,
    author:string,
    taskId:number,
    createAt?:Date,
    updateAt?:Date
};

export class CommentsService{

    public async findAll(taskId:number):Promise<CommentType[] |any>{

        return (await prisma.comments.findMany({
            where:{
                taskId:taskId
            }
        })).sort((t1,t2)=>t1.createdAt.getMilliseconds()-t2.createdAt.getMilliseconds());
    }


    public async findOne(id:number,taskId:number):Promise<CommentType |any>{

        return await prisma.comments.findUniqueOrThrow({
            where:{
                id:id,
                taskId:taskId
            }
        });
    }

    public async create(comments:CommentType,taskId:number):Promise<CommentType |any >{

        return await prisma.comments.create({
            data:{
                title:comments.title,
                content:comments.content,
                author:comments.author,
                taskId:taskId
            }
        });
    }


    public async update(id: number, comments:Partial<CommentType>,taskId:number):Promise<CommentType |any >{

        return await prisma.comments.update({
            where:{
                id:id,
                taskId:taskId
            },
            data:{
                title:comments.title,
                content:comments.content,
                author:comments.author,
                taskId:comments.taskId
            }
        });
    }


    public async delete(id:number,taskId:number):Promise<any>{

        return await prisma.comments.delete({
            where:{
                id:id,
                taskId:taskId
            }
        });
    }

}
