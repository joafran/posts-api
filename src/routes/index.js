import { Router } from 'express';
import { 
    createPost,
    deletePost,
    getPost,
    getPosts,
    updatePost
 } from '../controllers/post.controller';

const router = Router();

router.get('/posts', getPosts);
router.get('/posts/:id', getPost);
router.delete('/posts/:id', deletePost);
router.post('/posts', createPost);
router.put('/posts/:id', updatePost);

export default router;