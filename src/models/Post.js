import { DataTypes } from 'sequelize'
import db from '../db'

const Post = db.define('post', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        validate: {
            is: /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i
        }
    },
    category: {
        type: DataTypes.STRING
    }
});

export default Post;