import express from 'express';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.route';
import { UserRoutes } from '../modules/users/user.route';

//import { UserController } from './user.controller';
//import { UserValidation } from './user.validation';
const router = express.Router();
// optimize route by map

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/academic-semesters',
    route: AcademicSemesterRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
// router.use('/users/', UserRoutes);
// router.use('/academic-semesters', AcademicSemesterRoutes);

export default router;

/*

app.use('/api/v1/users/', UserRoutes);
app.use('/api/v1/academic-semesters', AcademicSemesterRoutes);
*/
