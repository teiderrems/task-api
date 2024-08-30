import { Router } from 'express';
import { TaskController } from '../controllers/task.controller';
import { CommentsController } from '../controllers/comments.controller';

const taskRouter=Router();

taskRouter.get('/',new TaskController().findAll);
taskRouter.get('/:id',new TaskController().findOne);
taskRouter.post('/',new TaskController().create);
taskRouter.put('/:id',new TaskController().update);
taskRouter.get('/:taskId/comments/',new CommentsController().findAll);
taskRouter.get('/comments/:id',new CommentsController().findOne);
taskRouter.post('/comments/',new CommentsController().create);
taskRouter.put('/comments/:id',new CommentsController().update);



export default taskRouter;
