import { Router } from 'express';
import { getPost, getPosts } from '../controllers/post.controller';

const router = Router();

router.get('/posts', getPosts);
router.get('/posts/:id', getPost);

export default router;