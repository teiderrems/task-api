import { TaskService } from "../services/task.service";

import { Request,Response } from 'express';

export class TaskController{

    public async findAll(req:Request,res:Response){
        
        try {
            return res.status(200).json(await new TaskService().findAll());
        } catch (error) {
            return res.status(502).json(error);
        }
    }

    public async findOne(req:Request,res:Response){
        try {
            const {id}=req.params;
            return res.status(200).json(await new TaskService().findOne(+id));
        } catch (error) {
            return res.status(502).json(error);
        }
    }

    public async create(req:Request,res:Response){
        try {
            return res.status(201).json(await new TaskService().create(req.body));
        } catch (error) {
            return res.status(502).json(error);
        }
    }

    public async update(req:Request,res:Response){
        try {
            const {id}=req.params;
            return res.status(201).json(await new TaskService().update(+id,req.body));
        } catch (error) {
            return res.status(502).json(error);
        }
    }

    public async delete(req:Request,res:Response){
        try {
            const {id}=req.params;
            return res.status(204).json(await new TaskService().delete(+id));
        } catch (error) {
            return res.status(502).json(error);
        }
    }
}