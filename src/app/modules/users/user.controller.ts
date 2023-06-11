import { RequestHandler } from 'express'
import { UserService } from './user.service'
import { z } from 'zod'

const createUser: RequestHandler = async (req, res, next) => {
  try {
    const createUserZodSchema = z.object({
      body: z.object({
        role: z.string({
          required_error: 'role is required',
        }),
        password: z.string().optional(),
      }),
    })

    await createUserZodSchema.parseAsync(req)
    // // req-validation
    // body --> object
    // data --->object

    const { user } = req.body
    const result = await UserService.createUser(user)
    res.status(200).json({
      success: true,
      message: 'user created successfully!',
      data: result,
    })
  } catch (err) {
    next(err)
    // res.status(400).json({
    //   error: err,

    // success: false,
    // message: 'failed to create user',
    //})
  }
}
export const UserController = {
  createUser,
}
