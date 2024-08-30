import { Router } from 'express';
import { CommentsController } from '../controllers/comments.controller';

const CommentsRouter=Router();

CommentsRouter.get('/',new CommentsController().findAll);
CommentsRouter.get('/:id',new CommentsController().findOne);
CommentsRouter.post('/',new CommentsController().create);
CommentsRouter.put('/:id',new CommentsController().update);



export default CommentsRouter;
