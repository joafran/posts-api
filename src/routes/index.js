import { Router } from 'express';
import { deletePost, getPost, getPosts } from '../controllers/post.controller';

const router = Router();

router.get('/posts', getPosts);
router.get('/posts/:id', getPost);
router.delete('/posts/:id', deletePost);

export default router;