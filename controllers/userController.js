import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import * as userService from "../services/userService.js";

const register = async(req,res)=>{

    const {username,email,password}=req.body;

    const hashedPassword =
        await bcrypt.hash(password,10);

    const user =
        await userService.createUser({
            username,
            email,
            password:hashedPassword
        });

    res.json(user);
};

const login = async(req,res)=>{

    const {email,password}=req.body;

    const user =
        await userService.findUserByEmail(email);

    if(!user){
        return res.status(401)
        .json({message:"User not found"});
    }

    const match =
        await bcrypt.compare(
            password,
            user.password
        );

    if(!match){
        return res.status(401)
        .json({message:"Invalid Password"});
    }

    const token =
        jwt.sign(
            {id:user._id},
            "secretkey"
        );

    res.json({
        token
    });
};

export {
    register,
    login
};