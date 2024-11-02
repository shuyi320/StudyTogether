import { DataTypes } from 'sequelize';
import { sequelize } from './_db.js'

const Event = sequelize.define('Event', {
     eventId:{
        type: DataTypes.INTEGER,
        primaryKey: true,
    },

});

export default event;