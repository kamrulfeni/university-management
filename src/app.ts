import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
//import userService from './app/modules/users/user.service'
const app: Application = express();
// import ApiError from './errors/ApiError'
import globalErrorHandler from './app/middlewares/globalErrorHandler';

import routes from './app/routes';
import httpStatus from 'http-status';
// import {
//   generateFacultyId,
//   generateStudentId,
// } from './app/modules/users/user.utils';
//import { generateStudentId } from './app/modules/users/user.utils';

app.use(cors());
// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', routes);
// app.use('/api/v1/users/', UserRoutes);
// app.use('/api/v1/academic-semesters', AcademicSemesterRoutes);
//testing
// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   Promise.reject((new Error('unhandled Promise Rejection')))
//   throw new ApiError(400, 'Ore Baba Error')
// throw new Error('ore Baba Error')
// next('ore baba error')
//   // await userService.createUser({
//   //   id:'999',
//   //   password:'1234',
//   //   role:"student"
//   // })
//   res.send('Working successfully')
// global error handler
// })
app.use(globalErrorHandler);

// handle not found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not found ',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  });
  next();
});
// test
// const academicSemester = {
//   code: '01',
//   year: '2027',
// };

// const testId = async () => {
//   const testId = await generateStudentId(academicSemester);
//   console.log(testId);
// };
// testId();
export default app;
