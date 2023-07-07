//import { RequestHandler } from 'express'
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IUser } from './user.interface';
import { UserService } from './user.service';

const createStudent = catchAsync(async (req: Request, res: Response) => {
  const { student, ...userData } = req.body;
  const result = await UserService.createStudent(student, userData);

  // res.status(200).json({
  //   success: true,
  //   message: 'user created successfully!',
  //   data: result,
  // });

  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'user created successfully!',
    data: result,
  });
  // next();
});
// res.status(400).json({
//   error: err,

// success: false,
// message: 'failed to create user',
//})

export const UserController = {
  createStudent,
};
