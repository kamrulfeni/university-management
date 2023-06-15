import express, { Application } from 'express';
import cors from 'cors';
//import userService from './app/modules/users/user.service'
const app: Application = express();
// import ApiError from './errors/ApiError'
import globalErrorHandler from './app/middlewares/globalErrorHandler';

import routes from './app/routes';

app.use(cors());
// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/', routes);
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

export default app;
