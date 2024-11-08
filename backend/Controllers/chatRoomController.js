//chatRoomController.js

//Import model
import db from "../Models/_db";
const { ChatRoom } = db;

const createChatRoom = async (req, res) => {

    const { roomId, name, description } = req.body;

    try {

        //Create the chatroom object
        const newChatRoom = await ChatRoom.create({
            roomId,
            name,
            description,
        });

    } catch (error) {
        console.error("Error creating chatroom:", error);

        return res.status(400).json(
            {
                error: "Error creating chatroom.", details: error.message,

            }
        );
    }
};

const getChatRoomBYId = async (req, res) => {
    const { id } = req.params;
    try {
        const room = await ChatRoom.findOne({
            where: { roomID: id }
        });

        if (!room) {
            return res.status(404).json({ error: "Chat Room Not Found" })
        }
        return res.status(200).json(room);

    } catch (error) {
        console.log(error)
        return res.status(400).json({ error: error.message })
    }
};


export { createChatRoom, getChatRoomBYId };