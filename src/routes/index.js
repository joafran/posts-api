import { Router } from 'express';
import { 
    createPost,
    deletePost,
    getPost,
    getPosts
 } from '../controllers/post.controller';

const router = Router();

router.get('/posts', getPosts);
router.get('/posts/:id', getPost);
router.delete('/posts/:id', deletePost);
router.post('/posts', createPost);

export default router;