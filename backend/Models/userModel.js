//Define the user schema
import { DataTypes } from 'sequelize';
import {sequelize} from './db.js'

const User = sequelize.define('User', {
    username:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate:{
            isEmail:true,
        },
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            len: [6],
        },
    },
    createdAt:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
});

export default User;