import { prisma } from ".."

const fakeTask=async()=>{
    // (await prisma.comments.findMany()).map(async(t)=>await prisma.task.delete({
    //     where:{
    //         id:t.id
    //     }
    // }));

    // (await prisma.task.findMany()).map(async(t)=>await prisma.task.delete({
    //     where:{
    //         id:t.id
    //     }
    // }));
    
    var i=0
    while(i<10){
        let task=await prisma.task.create({
            data:{
                title: `learn prisma ${i}`,
                content:`can i learn prisma ${i} every day?` 
            }
        });
        await prisma.comments.create({
            data:{
                title:` title comment task with id ${task.id}`,
                content:`content comment task with id ${task.id}`,
                taskId:task.id
            }
        });
        i++;
    }
}


export default fakeTask;