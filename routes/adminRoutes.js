import express from 'express';
import verifyToken from '../middleware/auth.js';
import { getMaster, getAdmins, getPrincipal, getPrincipals, getTeacher, getTeachers, getStudent, getStudents } from '../controller/adminController.js';

const router = express.Router();

// Master
router.get('/master/:id', verifyToken(["master"]), getMaster);
router.get('/master', verifyToken(["master"]), getAdmins);

// Principal
router.get('/principal/:id', verifyToken(["principal"]), getPrincipal);
router.get('/principal', verifyToken(["master"]), getPrincipals);

// Teacher
router.get('/teacher/:id', verifyToken(["teacher"]), getTeacher);
router.get('/teacher', verifyToken(["master", "principal"]), getTeachers);

// Student
router.get('/student/:id', verifyToken(["student"]), getStudent);
router.get('/student', verifyToken(["master", "principal", "teacher"]), getStudents);

export default router;
