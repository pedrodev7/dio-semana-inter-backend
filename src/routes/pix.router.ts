import {Router} from  'express'
import userAthenticated from '../middlewares/userAuthenticated'
import PixController from '../resources/pix/pix.controller'

const pixRouter = Router();
const pixController = new PixController();

pixRouter.use(userAthenticated);

pixRouter.post('/request', pixController.request)
pixRouter.post('/pay/:key', pixController.pay)
pixRouter.get('/transactions', pixController.transactions)

export default pixRouter;