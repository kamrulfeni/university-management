import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterController } from './academicSemester.controller';
import { AcademicSemesterValidation } from './academicSemester.validation';
//import { UserController } from './user.controller';
//import { UserValidation } from './user.validation';
const router = express.Router();

router.post(
  '/create-semester',
  validateRequest(AcademicSemesterValidation.createAcademicSemesterZodSchema),
  AcademicSemesterController.createSemester
  //UserController.createUser
);

router.get('/', AcademicSemesterController.getAllSemesters);

export const AcademicSemesterRoutes = router;
