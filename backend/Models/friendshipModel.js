//Define the friendship schema
import { DataTypes } from 'sequelize';
import {sequelize} from './db.js'
import User from './userModel.js';

const Friendship = sequelize.define('Friendship', {
    userId:{
        type: DataTypes.INTEGER,
        references:{
            model: User,
            key: 'id',
        },
        primaryKey: true,
    },
    friendId:{
        type: DataTypes.INTEGER,
        references:{
            model: User,
            key: 'id',
        },
        primaryKey: true,
    },
    createdAt:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
});

export default Friendship;