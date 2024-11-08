//eventController.js

//Import model
import db from "../Models/_db";
const { Event, Attribute } = db;

const createEvent = async (req, res) => {

    const { organizerId, chatRoomId, name, description, tags } = req.body;

    try {

        //Create the event object
        // These are attributes needs to be defined in the request

        const newEvent = await Event.create({
            organizerId,
            chatRoomId,
            name,
            description,
        });

        //Query the tags associated
        if (tags && tags.length > 0) {
            // tags is an array of attributeIds
            const tagInstances = await Attribute.findAll({
                where: { attributeId: tags },
            })
        }

        //  'setTags' comes from `belongsToMany`
        // it creates an association between Event and Attributes table
        await newEvent.setTags(tagInstances);

    } catch (error) {
        console.error("Error creating event:", error);

        return res.status(400).json(
            {
                error: "Error creating event.", details: error.message,

            }
        );
    }
};

const getAllEvents = async (req, res) => {


};


export { createEvent, getAllEvents };