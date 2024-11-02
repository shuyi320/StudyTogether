//userController.js
//Functionality for userRoutes requests
//This script will import a database model and implement functions for routes based on requests
import User from '../Models/userModel.js';
import Friendship from "../Models/friendshipModel.js";
import { Clerk } from '@clerk/clerk-sdk-node'; // Assuming you use it for backend validations

import bcrypt from 'bcrypt';

/*
TODO:: Need to redo registerUser to where clerkUserId is stored instead of userId
We can sync data by creating a new webwook and subscribing it to an event like whenever a new user is created/updated/deleted
*/
const registerUser = async (req, res) => {

    try{        

        const {username, email, password} = req.body;

        //Verify that the username & email are both unique
        // i.e) they don't exist in the database

        const existingUser = await User.findOne({
            where:{
                username,
                email,
            },
        })

        if(existingUser){
            res.status(400).json({error: "User already exists."});
        }


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

        //Validating data
        const {userId, friendId} = req.body;

        if(userId === friendId){
            return res.status(409).json({error : "You can't friend yourself :("});
        }

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
