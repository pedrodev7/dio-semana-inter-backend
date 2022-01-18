import {Router} from  'express'
import userAuthenticated from '../middlewares/userAuthenticated'
import {UserController} from '../resources/users/user.controller'

const userRouter = Router();
const userController = new UserController();


userRouter.post('/signin', userController.singin)
userRouter.post('/signup', userController.singup)
userRouter.get('/me', userAuthenticated , userController.me)

export default userRouter;