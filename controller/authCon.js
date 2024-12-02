import AdminModel from "../models/adminModel.js";
import bcrypt from "bcrypt";
const saltRounds = 10;

// JWT secret key
const JWT_SECRET = process.env.JWT_SECRET;

export const signUp = async (req, res) => {
    try {

        const { username, email, password, role } = req.body;

        console.log('Hashing password:', password);
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const user = new AdminModel({
            username,
            email,
            password,
            role
        });

        await user.save();

        console.log('User Registered: ', user);

        return res.status(200).json({ message: 'User Registered:', user });
    } catch (error) {
        console.error('Error during registration:', error);
        return res.status(400).json({ message: `Error during registration: ${error}` });
    }
};

export const login = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const user = await AdminModel.findOne({ username, email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user._id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });

        return res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        console.error('Error during login:', error);
        return res.status(400).json({ message: `Error during login: ${error}` });
    }
};