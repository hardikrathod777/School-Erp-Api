import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ['master', 'principal', 'teacher', 'student']
    },
},
    {
        timestamps: true
    }
);

export default mongoose.model('Admin', AdminSchema);