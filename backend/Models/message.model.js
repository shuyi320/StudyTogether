// messageModel.js
import { DataTypes } from 'sequelize';

export default (sequelize) => {
    const Message = sequelize.define('Message', {
        roomId: {
            type: DataTypes.INTEGER,
        },
        messageId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: true,
            autoIncrement: true,
        },
        text: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        senderId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    }, {
        timestamps: false,
    });

    // Define associations
    Message.associate = (models) => {
        Message.belongsToMany(models.ChatRoom, {
            through: 'ChatRoomsMessage',  // The join table for the many-to-many relationship
            as: 'message',                 // alias for this association
            foreignKey: 'chatRoomId',  // The foreign key for the ChatRooms table
            otherKey: 'clerkUserId',    // The foreign key for the User table
        });
    };

    return Message;
};
