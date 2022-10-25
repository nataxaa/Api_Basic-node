import {Router} from 'express'
import * as apiController from '../controllers/apiControllers'


const router = Router()

router.get('/ping', apiController.ping)
router.get('/random', apiController.random)
router.get('/name/:name', apiController.name)

router.post('/frases', apiController.createPhrase)

export default router
