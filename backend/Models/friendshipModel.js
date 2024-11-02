//Define the friendship schema
import { DataTypes } from 'sequelize';
import { sequelize } from './_db.js'
import User from './userModel.js';

const Friendship = sequelize.define('Friendship', {
    userId: {
        type: DataTypes.STRING,
        references: {
            model: User,
            key: 'clerkUserId',
        },
        primaryKey: true,
    },
    friendId: {
        type: DataTypes.STRING,
        references: {
            model: User,
            key: 'clerkUserId',
        },
        primaryKey: true,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
});

export default Friendship;