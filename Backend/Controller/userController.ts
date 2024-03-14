import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { User } from "../Models/userModel";
import { Event } from "../Models/eventModel";


const createUser = async (req: Request, res: Response) => {
  try {
    const { username, password, firstname, lastname, email } = req.body;

    if (!username || !password || !firstname || !lastname || !email) {
      return res.status(400).json({ message: "Please fill in all required fields" });
    }

    const emailCheck = await User.findOne({ email });
    if (emailCheck) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      username,
      password: hashedPassword,
      firstname,
      lastname,
      email,
      Event
    });

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET || "defaultSecret", {
      expiresIn: "1d",
    });

    res.status(201).json({
      _id: newUser._id,
      username: newUser.username,
      firstname: newUser.firstname,
      token,
    });
  } catch (error) {
    console.error("Error occurred in createUser:", error);
    res.status(500).json({ message: "Error occurred in adding user data" });
  }
};

const addEventToUser = async (req: Request, res: Response): Promise<void> => {
  const { userName } = req.params;
  const event: Event = req.body; 

  try {
    const updatedUser = await User.findOneAndUpdate(
      { username: userName },
      { $push: { events: event } },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    res.status(200).json({ message: 'Event added to user', user: updatedUser });
  } catch (error) {
    console.error('Error occurred in addEventToUser:', error);
    res.status(500).json({ message: 'Error updating user with event'});
  }
};


const loginUser = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: "Please fill in all required fields" });
    }

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "Username does not exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Password is incorrect" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || "defaultSecret", {
      expiresIn: "1d",
    });

    res.status(200).json({
      message: "User logged in successfully",
      username: user.username,
      token,
    });
  } catch (error) {
    console.error("Error occurred in loginUser:", error);
    res.status(500).json({ message: "Error occurred in user login" });
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    console.error("Error occurred in getAllUsers:", error);
    res.status(500).json({ message: "Error occurred in fetching user data" });
  }
};

const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error("Error occurred in getUserById:", error);
    res.status(500).json({ message: "Error occurred in fetching user by ID" });
  }
};
const updateUserById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { username, password, firstname, lastname, email } = req.body;

  let hashedPassword = undefined;
  if (password) {
    const salt = await bcrypt.genSalt(10);
    hashedPassword = await bcrypt.hash(password, salt);
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        ...(username && { username }),
        ...(hashedPassword && { password: hashedPassword }),
        ...(firstname && { firstname }),
        ...(lastname && { lastname }),
        ...(email && { email }),
      },
    );

    if (!updatedUser) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    // Exclude password from the response for security.
    const { password, ...updatedUserInfo } = updatedUser.toObject();
    
    res.status(200).json(updatedUserInfo);
  } catch (error) {
    console.error("Error occurred in updateUserById:", error);
    res.status(500).json({ message: "Error occurred in updating user data" });
  }
};

const deleteUserById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.status(200).json({ message: "User successfully deleted", userId: id });
  } catch (error) {
    console.error("Error occurred in deleteUserById:", error);
    res.status(500).json({ message: "Error occurred in deleting user" });
  }
};
export const getUsersEventsByName = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { userName } = req.params;

    const user = await User.findOne({ username: userName });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json(user.events);
  } catch (error) {
    console.error('Error fetching user events:', error);
    return res.status(500).json({ message: 'Error fetching user events', error });
  }
};

export const isEventJoined = async (req: Request, res: Response): Promise<void> => {
  const { userName, eventId } = req.params;

  try {
    const parsedEventId = parseInt(eventId);
    if (isNaN(parsedEventId)) {
      res.status(400).json({ message: 'Invalid event ID' });
      return;
    }

    const user = await User.findOne({ username: userName }).exec();

    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    const eventJoined = user.events.some(event => event.Id === parsedEventId);
    res.status(200).json(eventJoined);

  } catch (error) {
    console.error('Error in isEventJoined:', error);
    res.status(500).json({ message: 'Error checking event joined status' });
  }
};





export default {
  createUser,
  loginUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  addEventToUser,
  getUsersEventsByName,
  isEventJoined
};
