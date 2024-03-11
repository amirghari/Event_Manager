const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');
const { ConnectionStates } = require('mongoose');

const createToken = (id, res) => {
    const token = jwt.sign({ userId: id }, process.env.SECRETKEY);
    if (res) {
        res.cookie('Authorization', token, {
            httpOnly: true,
            expires: new Date(Date.now() + 3600000),
        });
        return token;
    }
};
const getUserId = (req) => {
    const user = jwt.decode(req.cookies.Authorization, process.env.SECRETKEY);
    return user.userId;
};

// @desc Register a new user : @route POST /api/users/register : @access  Public
const registerUser = async (req, res, next) => {
    console.log(req.body);

    const { name, email, password } = req.body;
    if (!email || !password || !name) {
        return res
            .status(400)
            .json({ message: 'Please provide all the required fields' });
    }
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(404).json({ message: 'Email already exists' });
        } else {
            try {
                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(password, salt);
                const user = await User.create({
                    email,
                    password: hashedPassword,
                    name,
                });
                const token = createToken(user.id, res);
                console.log(token);

                res.status(201).json({
                    message: 'Registered succesfully',
                    user: {
                        id: user.id,
                        email: user.email,
                        name: user.name,
                    },
                    token: token,
                });
            } catch (error) {
                res.status(500).json({ message: 'Server error' });
            }
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc Authenticate a user : @route POST /api/users/login : @access  Public
const loginUser = async (req, res, next) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
        return res.status(404).json({ message: 'Email not found' });
    }

    try {
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid password' });
        } else {
            const token = createToken(user.id, res);
            res.status(200).json({
                message: 'Logged in succesfully',
                user: {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                },
                token: token,
            });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc Get user data : @route GET /api/users/getMe:id : @access  Private
const getMe = async (req, res, next) => {
    try {
        const userId = getUserId(req);
        const user = await User.findById(userId).select('-password');
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc Update user data : @route PUT /api/users/updateUser/:id : @access  Private
const updateUser = async (req, res, next) => {
    const { name, email, password } = req.body;
    try {
        const userId = getUserId(req);
        const user = await User.findByIdAndUpdate(
            userId,
            { name, email, password },
            { new: true }
        );
        res.json(user);
    } catch {
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc Delete user data : @route DELETE /api/users/deleteUser:id : @access  Private
const deleteUser = async (req, res) => {
    try {
        const userId = getUserId(req);
        res.clearCookie('Authorization');
        const user = await User.findByIdAndRemove(userId);
        if (user) {
            res.status(200).json({ message: 'User deleted', user });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'server error' });
    }
};
module.exports = {
    registerUser,
    loginUser,
    getMe,
    deleteUser,
    updateUser,
};
