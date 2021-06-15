import Post from "../models/Post";

export const getPosts = async (req, res) => {
    const posts = await Post.findAll({
        attributes: ['title','createdAt', 'image', 'category', 'id'],
        order: [
            ['createdAt','DESC']
        ]
    });
    if(!posts.length) return res.status(404).send("There's no posts available");
    return res.json(posts);
}

export const getPost = async (req, res) => {
    const { id } = req.params;
    try {
        const post = await Post.findAll({
            where: { id }
        });
        return res.json(post);
    } catch (error) {
        return res.status(404).send("Not found");
    }
}
