// Define the user schema
import { DataTypes } from 'sequelize';
import { sequelize } from './_db.js';

const User = sequelize.define('User', {
    clerkUserId: {
        type: DataTypes.STRING, // Assuming this is a string
        allowNull: false,
        unique: {
            msg: 'Clerk user ID must be unique.',
        },
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
            msg: 'Username must be unique.',
        },
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
            msg: 'Email must be unique.',
        },
        validate: {
            isEmail: {
                msg: 'Must be a valid email address.',
            },
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: {
                args: [6, 100], // Set a minimum and maximum length
                msg: 'Password must be at least 6 characters long.',
            },
        },
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    timestamps: false, // If you don't need updatedAt, keep this as false
});

export default User;
