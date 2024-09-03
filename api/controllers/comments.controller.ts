import { Request,Response } from 'express';
import { CommentsService } from '../services/comment.service';

export class CommentsController{

    public async findAll(req:Request,res:Response){
        try {
            const { taskId }=req.params;
            return res.status(200).json(await new CommentsService().findAll(+taskId));
        } catch (error) {
            return res.status(502).json(error);
        }
    }

    public async findOne(req:Request,res:Response){
        try {
            const {id,taskId}=req.params;
            return res.status(200).json(await new CommentsService().findOne(+id,+taskId));
        } catch (error) {
            return res.status(502).json(error);
        }
    }

    public async create(req:Request,res:Response){
        try {
            const {taskId}=req.params;
            return res.status(201).json(await new CommentsService().create(req.body,+taskId));
        } catch (error) {
            return res.status(502).json(error);
        }
    }

    public async update(req:Request,res:Response){
        try {
            const {id,taskId}=req.params;
            return res.status(201).json(await new CommentsService().update(+id,req.body,+taskId));
        } catch (error) {
            return res.status(502).json(error);
        }
    }

    public async delete(req:Request,res:Response){
        try {
            const {id,taskId}=req.params;
            return res.status(204).json(await new CommentsService().delete(+id,+taskId));
        } catch (error) {
            return res.status(502).json(error);
        }
    }
}