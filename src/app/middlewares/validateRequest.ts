import { NextFunction, Request, Response } from 'express'
import { AnyZodObject } from 'zod'

const validateRequest =
  (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
        cookies: req.cookies,
      })
      return next()
    } catch (error) {
      next(error)
      // res.status(400).json({
      //   error: err,

      // success: false,
      // message: 'failed to create user',
      //})
    }
  }
export default validateRequest
// middleware---> validateRequest(userZodSchema)=> async (req,next)
