//userController
//Functionality for userRoutes requests
//This script will import a database model and implement functions for routes based on requests
import User from '../Models/userModel.js';
import Friendship from "../Models/friendshipModel.js";

import bcrypt from 'bcrypt';

const registerUser = async (req, res) => {

    try{
        const {username, email, password} = req.body;

        //Hash the password
        const passwordHash = await bcrypt.hash(password, 10);

        const user = await User.create({username, email, password: passwordHash});
        
        //Send a response with the created object
        const userResponse ={
          id: user.id,
          username: user.username,
          email: user.email,
          createdAt: user.createdAt,  
        };

        res.status(201).json(userResponse);

    }catch(error){
        res.status(400).json({error: error.message});
    }
};

const getExistingUsers = async(req, res) =>{
    try {

        const users = await User.findAll();
        res.json(users);
        
    } catch (error) {
        res.status(400).json({error : "Error fetching all existing users."});
    }
}

const addFriend = async (req, res) =>{

    try {

        if(userId === friendId){
            return res.status(409).json({error : "You can't friend yourself :("});
        }

        const {userId, friendId} = req.body;
        
        //Check if they are existing friends
        
        const existingFriends = await Friendship.findOne({
            where: {
                userId,
                friendId,
            },
        });

        //existingFriends exists, they are already friends
        if(existingFriends){
            return res.status(409).json({error : "Friendship already exists."});
        };

        //Create the friendship
        const friendShip = await Friendship.create({userId, friendId});

        res.status(200).json(friendShip);

    } catch (error) {
        res.status(400).json({error : error.message});
    }

};

const getFriends = async (req, res) =>{

    try {
        const userId = req.params.userId;
        const friendships = await Friendship.findAll({ where: { userId}});
        res.json(friendships);

    } catch (error) {
        res.status(400).json({error : error.message});
    }
};

export { registerUser, getExistingUsers, addFriend, getFriends }; 
