import express, { Application, Request, Response } from 'express'
import cors from 'cors'
//import userService from './app/modules/users/user.service'
const app: Application = express()

import usersRouter from './app/modules/users/user.route'
app.use(cors())
// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/users/', usersRouter)
//testing
app.get('/',  (req: Request, res: Response) => {
  // await userService.createUser({
  //   id:'999',
  //   password:'1234',
  //   role:"student"
  // })
  res.send('Working successfully')
})

export default app
