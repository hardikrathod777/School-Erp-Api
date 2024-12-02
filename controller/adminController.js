import AdminModel from '../models/adminModel.js';

// Get single master by ID
export const getMaster = async (req, res) => {
    try {
        const master = await AdminModel.findById(req.params.id);
        if (!master) {
            return res.status(404).json({ message: 'master not found' });
        }
        return res.status(200).json({ master });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Server error' });
    }
};

// Get Admins
export const getAdmins = async (req, res) => {
    try {
        const admin = await AdminModel.find({});
        if (!admin) {
            return res.status(404).json({ message: 'Admin not found' });
        }
        return res.status(200).json({ admin });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Server error' });
    }
};

// Get single principal by ID
export const getPrincipal = async (req, res) => {
    try {
        const principal = await AdminModel.findById(req.params.id);
        if (!principal) {
            return res.status(404).json({ message: 'Record not found' });
        }
        return res.status(200).json({ principal });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Server error' });
    }
};

// Get Principals
export const getPrincipals = async (req, res) => {
    try {
        const principal = await AdminModel.find({ role: 'principal' });
        if (!principal) {
            return res.status(404).json({ message: 'Principal not found' });
        }
        return res.status(200).json({ principal });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Server error' });
    }
};

// Get single teacher by ID
export const getTeacher = async (req, res) => {
    try {
        const teacher = await AdminModel.findById(req.params.id);
        if (!teacher) {
            return res.status(404).json({ message: 'Record not found' });
        }
        return res.status(200).json({ teacher });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Server error' });
    }
};

// Get Teachers
export const getTeachers = async (req, res) => {
    try {
        const teacher = await AdminModel.find({ role: 'teacher' });
        if (!teacher) {
            return res.status(404).json({ message: 'Teacher not found' });
        }
        return res.status(200).json({ teacher });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Server error' });
    }
};

// Get Single Student by ID
export const getStudent = async (req, res) => {
    try {
        const student = await AdminModel.findById(req.params.id);
        if (!student) {
            return res.status(404).json({ message: 'Record not found' });
        }
        return res.status(200).json({ student });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Server error' });
    }
};

// Get Students
export const getStudents = async (req, res) => {
    try {
        const student = await AdminModel.find({ role: 'student' });
        if (!student) {
            return res.status(404).json({ message: 'Students not found' });
        }
        return res.status(200).json({ student });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Server error' });
    }
};
