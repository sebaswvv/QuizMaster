const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
import { UserService } from "../services/userservice";
import { Request, Response } from "express";

exports.register = async (req: Request, res: Response) => {
    // read username and password from request body
    const { username, password, email } = req.body;
    const userService = new UserService();
    // TODO check if username already exists 
    const user = await userService.registerUser(username, password, email);  
    res.status(201).send({
        message: "User created",
        username: username,
        email: email,
        userId: user[0]
    });
}

exports.login = async (req: Request, res: Response) => {
    // read username and password from request body
    const { username, password } = req.body;

    // check if the username and password are set
    // if (!(username && password)) {
    //     res.status(400).send("Username and password are required");
    //     return;
    // }

    // get user from database
    const userService = new UserService();
    const user = await userService.getUserByUsername(username);

    // check if user exists
    if (user.length === 0) {
        res.status(401).send("Invalid username or password");
        return;
    }

    // check if encrypted password match
    const validPassword = await bcrypt.compare(password, user[0].password);
    if (!validPassword) {
        res.status(401).send("Invalid username or password");
        return;
    }

    // generate token with username and key also audience and issuer and algorithm and expiresIn
    const key = process.env.JWT_KEY;
    const token = jwt.sign({ username: user[0].username }, key, { expiresIn: "1h", issuer: "http://localhost:3000", audience: "http://localhost:3000", algorithm: "HS256" });

    // TODO: send user id as well
    res.send({
        message: "Login successful",
        userId: user[0].id,
        token: token
    })
}
