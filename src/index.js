import server from "./server";
import db from "./db";
import dotenv from 'dotenv';
import Post from "./models/Post";
dotenv.config();


const { PORT } = process.env;

db.sync({force: true}).then( async () => {
    try {
       await Post.bulkCreate([
            {title: 'Post 1', content: 'Post 1 content', image: 'www.image.com/post1img', category: 'Category 1'},
            {title: 'Post 2', content: 'Post 2 content', image: 'www.image.com/post2img', category: 'Category 2'},
            {title: 'Post 3', content: 'Post 3 content', image: 'www.image.com/post3img', category: 'Category 3'},
        ]);
        console.log('<< DB CONNECTED >>')
        server.listen(PORT, () => {
            console.log(`Listening on port ${PORT}`);
        });
    } catch (error) {
        console.log("Connection error", error)
    }
})