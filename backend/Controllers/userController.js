//Functionality for the userRoute requests
//This script will import a database model and implement functions for routes based on requests
import User from '../Models/userModel.js';

const registerUser = (req, res) => {
    res.send("Register");
};

export { registerUser }; 
